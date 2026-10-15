import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from '../../context/useAuth.js';
import { getProfile, updateProfile } from '../../services/profileService.js';
import Avatar from '../../components/Avatar/Avatar.jsx';
import AvatarEditor from '../../components/AvatarEditor/AvatarEditor.jsx';
import styles from './ProfilePage.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const EMPTY_MEDALS = [null, null, null, null, null];

function ProfilePage() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const [profile, setProfile] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);

    useEffect(() => {
        let isMounted = true;

        async function loadProfile() {
            try {
                const data = await getProfile(user.id);
                if (!isMounted) return;

                setProfile(data);
                setDisplayName(data.display_name ?? '');
            } catch (error) {
                if (!isMounted) return;

                setErrorMessage(
                    `No se pudo cargar tu perfil: ${error.message}`,
                );
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        loadProfile();

        return () => {
            isMounted = false;
        };
    }, [user.id]);

    async function handleSaveName(event) {
        event.preventDefault();

        setMessage('');
        setErrorMessage('');

        const normalizedName = displayName.trim();

        if (!normalizedName) {
            setErrorMessage('El nombre no puede estar vacío.');
            return;
        }

        setSaving(true);

        try {
            const updatedProfile = await updateProfile(user.id, {
                display_name: normalizedName,
            });

            setProfile(updatedProfile);
            setDisplayName(updatedProfile.display_name);
            setMessage('Tu nombre se guardó correctamente.');
            setIsEditingName(false);
        } catch (error) {
            setErrorMessage(
                `No se pudieron guardar los cambios: ${error.message}`,
            );
        } finally {
            setSaving(false);
        }
    }

    function handleCancelEditName() {
        setDisplayName(profile.display_name ?? '');
        setErrorMessage('');
        setIsEditingName(false);
    }

    async function handleSaveAvatar(avatar) {
        setMessage('');
        setErrorMessage('');
        setSaving(true);

        try {
            const updatedProfile = await updateProfile(user.id, { avatar });

            setProfile(updatedProfile);
            setMessage('Tu avatar se guardó correctamente.');
            setIsEditingAvatar(false);
        } catch (error) {
            setErrorMessage(
                `No se pudo guardar el avatar: ${error.message}`,
            );
        } finally {
            setSaving(false);
        }
    }

    async function handleSignOut() {
        try {
            await signOut();
            navigate('/acceso', { replace: true });
        } catch (error) {
            setErrorMessage(
                `No se pudo cerrar la sesión: ${error.message}`,
            );
        }
    }

    if (loading) {
        return <p role="status">Cargando tu perfil...</p>;
    }

    if (!profile) {
        return (
            <main className={styles.page}>
                <p role="alert">
                    {errorMessage || 'No se pudo cargar tu perfil.'}
                </p>
                <button type="button" onClick={handleSignOut}>
                    Cerrar sesión
                </button>
            </main>
        );
    }

    const medals = Array.isArray(profile.medals)
        ? profile.medals
        : EMPTY_MEDALS;

    const hasAvatar = Boolean(
        profile.avatar?.skin && profile.avatar?.hair,
    );
    const showAvatarEditor = !hasAvatar || isEditingAvatar;
    const displayNameValue =
        profile.display_name?.trim() || 'Sin nombre';

    return (
        <>
            <Header />
            <main className={styles.page}>
                <section className={styles.profile}>
                    <header className={styles.header}>
                        <h1>Tu espacio personal</h1>
                        <p>Tu aventura comienza aquí.</p>
                    </header>

                    <section
                        className={styles.avatarSection}
                        aria-label="Tu identidad"
                    >
                        <div className={styles.identityHeader}>
                            {isEditingName ? (
                                <form
                                    className={styles.nameForm}
                                    onSubmit={handleSaveName}
                                >
                                    <input
                                        id="display-name"
                                        name="displayName"
                                        type="text"
                                        autoComplete="nickname"
                                        maxLength={40}
                                        value={displayName}
                                        onChange={(event) =>
                                            setDisplayName(
                                                event.target.value,
                                            )
                                        }
                                        aria-label="Nombre de usuario"
                                        required
                                        autoFocus
                                    />

                                    <div className={styles.nameActions}>
                                        <button
                                            type="submit"
                                            className={styles.primaryButton}
                                            disabled={saving}
                                        >
                                            {saving
                                                ? 'Guardando...'
                                                : 'Guardar'}
                                        </button>
                                        <button
                                            type="button"
                                            className={
                                                styles.secondaryButton
                                            }
                                            onClick={handleCancelEditName}
                                            disabled={saving}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <>
                                    <h2 className={styles.userName}>
                                        {displayNameValue}
                                    </h2>
                                    <button
                                        type="button"
                                        className={styles.editButton}
                                        onClick={() =>
                                            setIsEditingName(true)
                                        }
                                    >
                                        Editar nombre
                                    </button>
                                </>
                            )}
                        </div>

                        {showAvatarEditor ? (
                            <AvatarEditor
                                initialAvatar={profile.avatar}
                                onSave={handleSaveAvatar}
                                saving={saving}
                                onCancel={
                                    hasAvatar
                                        ? () => setIsEditingAvatar(false)
                                        : undefined
                                }
                            />
                        ) : (
                            <div className={styles.avatarView}>
                                <div className={styles.avatarHover}>
                                    <Avatar avatar={profile.avatar} />

                                    <button
                                        type="button"
                                        className={styles.editAvatarButton}
                                        onClick={() => setIsEditingAvatar(true)}
                                    >
                                        Editar avatar
                                    </button>
                                </div>
                            </div>
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
                        <section className={styles.medalsSection} aria-label="Medallas">
                            <div className={styles.medals}>
                                {EMPTY_MEDALS.map((_, index) => {
                                    const medal = medals[index];

                                    return (
                                        <div
                                            className={styles.medalSlot}
                                            key={`medal-${index}`}
                                            aria-label={
                                              medal
                                                    ? `Medalla ${index + 1}`
                                                    : `Espacio de medalla ${
                                                          index + 1
                                                      } vacío`
                                            }
                                            title={
                                                medal
                                                    ? `Medalla ${index + 1}`
                                                    : 'Medalla pendiente'
                                            }
                                        >
                                            {medal ? '✧' : '＋'}
                                        </div>
                                    );
                                })}
                            </div>
                        </section> 
                    </section>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ProfilePage;