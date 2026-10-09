
import { useState } from 'react';
import { Link, Navigate } from 'react-router';

import { useAuth } from '../../context/useAuth.js';
import { supabase } from '../../lib/supabaseClient.js';
import styles from './AuthPage.module.css';

function AuthPage() {
    const { user, loading } = useAuth();

    const [mode, setMode] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setMessage('');
        setErrorMessage('');
        setIsSubmitting(true);

        try {
            const isSignUp = mode === 'signup';

            const options = {
                emailRedirectTo: `${window.location.origin}/perfil`,
                shouldCreateUser: isSignUp,
            };

            if (isSignUp) {
                options.data = {
                    display_name: displayName.trim(),
                };
            }

            const { error } = await supabase.auth.signInWithOtp({
                email: email.trim(),
                options,
            });

            if (error) {
                throw error;
            }

            setMessage(
                'Te enviamos un enlace a tu correo. Ábrelo para continuar en LUNARIA.',
            );
        } catch (error) {
            setErrorMessage(
                error.message || 'No se pudo procesar la solicitud.',
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleModeChange(nextMode) {
        setMode(nextMode);
        setMessage('');
        setErrorMessage('');
    }

    if (loading) {
        return <p role="status">Comprobando sesión...</p>;
    }

    if (user) {
        return <Navigate to="/perfil" replace />;
    }

    const isSignUp = mode === 'signup';

    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <Link to="/" className={styles.backLink}>
                    ← Volver a LUNARIA
                </Link>

                <h1>
                    {isSignUp
                        ? 'Crea tu cuenta'
                        : 'Tu espacio en LUNARIA'}
                </h1>

                <p>
                    {isSignUp
                        ? 'Regístrate para guardar tu progreso y personalizar tu perfil.'
                        : 'Accede a tu perfil con un enlace seguro enviado a tu correo.'}
                </p>

                <div
                    role="group"
                    aria-label="Tipo de acceso"
                >
                    <button
                        type="button"
                        aria-pressed={!isSignUp}
                        onClick={() => handleModeChange('login')}
                        disabled={isSubmitting}
                    >
                        Iniciar sesión
                    </button>

                    <button
                        type="button"
                        aria-pressed={isSignUp}
                        onClick={() => handleModeChange('signup')}
                        disabled={isSubmitting}
                    >
                        Crear cuenta
                    </button>
                </div>

                {mode && (
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <>
                                <label htmlFor="displayName">
                                    Nombre de usuario
                                </label>

                                <input
                                    id="displayName"
                                    name="displayName"
                                    type="text"
                                    autoComplete="nickname"
                                    value={displayName}
                                    onChange={(event) =>
                                        setDisplayName(event.target.value)
                                    }
                                    maxLength={40}
                                    required
                                />
                            </>
                        )}

                        <label htmlFor="email">
                            Correo electrónico
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting
                                ? 'Enviando enlace...'
                                : isSignUp
                                  ? 'Crear cuenta'
                                  : 'Enviar enlace de acceso'}
                        </button>
                    </form>
                )}
                {message && (
                    <p className={styles.success} role="status">
                        {message}
                    </p>
                )}

                {errorMessage && (
                    <p className={styles.error} role="alert">
                        {errorMessage}
                    </p>
                )}
            </section>
        </main>
    );
}

export default AuthPage;