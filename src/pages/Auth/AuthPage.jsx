import { useState } from 'react';
import { Link } from 'react-router';

import { supabase } from '../../lib/supabaseClient.js';
import styles from './AuthPage.module.css';

function AuthPage() {
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
            const { error } = await supabase.auth.signInWithOtp({
                email: email.trim(),
                options: {
                    emailRedirectTo: `${window.location.origin}/perfil`,
                    data: {
                        display_name: displayName.trim(),
                    },
                    shouldCreateUser: true,
                },
            });

            if (error) {
                throw error;
            }

            setMessage(
                'Te enviamos un enlace de acceso a tu correo. Ábrelo para continuar en LUNARIA.',
            );
        } catch (error) {
            setErrorMessage(
                error.message || 'No se pudo enviar el enlace de acceso.',
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <Link to="/" className={styles.backLink}>
                    ← Volver a LUNARIA
                </Link>

                <h1>Tu espacio en LUNARIA</h1>

                <p>
                    Elige tu nombre y utiliza tu correo para acceder
                    a tu perfil desde cualquier dispositivo.
                </p>

                <form onSubmit={handleSubmit}>
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

                    <label htmlFor="email">
                        Correo electrónico
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting
                            ? 'Enviando enlace...'
                            : 'Enviar enlace de acceso'}
                    </button>
                </form>

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