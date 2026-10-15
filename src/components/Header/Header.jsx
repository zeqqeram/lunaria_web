
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { useAuth } from '../../context/useAuth.js';
import styles from './Header.module.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    function handleCloseMenu() {
        setIsMenuOpen(false);
    }

    async function handleSignOut() {
        try {
            await signOut();
            handleCloseMenu();
            navigate('/', { replace: true });
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    }

    return (
        <header className={styles.header}>
            <nav
                className={styles.nav}
                aria-label="Navegación principal"
            >
                <Link
                    className={styles.login}
                    to={user ? '/perfil' : '/acceso'}
                    aria-label={
                        user ? 'Ir a mi perfil' : 'Iniciar sesión'
                    }
                >
                    {user ? 'Mi perfil' : 'Acceder'}
                </Link>

                <div className={styles.leftGroup}>
                    <Link
                        className={styles.logo}
                        to="/"
                        onClick={handleCloseMenu}
                    >
                        LUNARIA
                    </Link>
                </div>

                <button
                    className={styles.menuButton}
                    type="button"
                    aria-label={
                        isMenuOpen ? 'Cerrar menú' : 'Abrir menú'
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </nav>

            {isMenuOpen && (
                <div
                    className={styles.menuOverlay}
                    onClick={handleCloseMenu}
                >
                    <nav
                        id="mobile-menu"
                        className={styles.mobileMenu}
                        aria-label="Menú principal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            type="button"
                            aria-label="Cerrar menú"
                            onClick={handleCloseMenu}
                        >
                            ×
                        </button>

                        <div className={styles.menuLinks}>
                            {!user ? (
                                <>
                                    <Link to="/acceso" onClick={handleCloseMenu}>
                                        Iniciar sesión
                                    </Link>

                                    <Link to="/acceso" onClick={handleCloseMenu}>
                                        Crear cuenta
                                    </Link>
                                </>
                            ) : (
                                <Link to="/perfil" onClick={handleCloseMenu}>
                                    Mi perfil
                                </Link>
                            )}

                            <Link to="/#roadmap" onClick={handleCloseMenu}>
                                Roadmap de actividades
                            </Link>

                            <Link to="/" onClick={handleCloseMenu}>
                                Actividad oculta
                            </Link>

                            {user && (
                                <button
                                    type="button"
                                    className={styles.menuAction}
                                    onClick={handleSignOut}
                                >
                                    Cerrar sesión
                                </button>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;