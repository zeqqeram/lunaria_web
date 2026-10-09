import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleOpenMenu() {
        setIsMenuOpen(true);
    }

    function handleCloseMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Navegación principal">
                <Link className={styles.login} to="/acceso">
                    Iniciar <br /> Sesión
                </Link>
                <div className={styles.leftGroup}>
                    <a  className={styles.logo} href="/"> LUNARIA </a>
                    <div className={styles.desktopLinks}>
                        <a className={styles.navLink} href="/"> About Us </a>
                        <a className={styles.navLink} href="/"> ¿Niebla? </a>
                    </div>
                </div>
                <button className={styles.menuButton} type='button' aria-label='Abrir menú' aria-expanded={isMenuOpen} onClick={handleOpenMenu}>
                    <span />
                    <span />
                    <span />
                </button>                    
            </nav>
            {isMenuOpen && (
                <div className={styles.menuOverlay} onClick={handleCloseMenu}>
                    <nav id='mobile-menu' className={styles.mobileMenu} aria-label='Menú principal' onClick={(event) => event.stopPropagation()}>
                        <button className={styles.closeButton} aria-label='Cerrrar menú' onClick={handleCloseMenu}>
                            x
                        </button>
                        <div className={styles.menuLinks}>
                            <a href="/"> Iniciar Sesión</a>
                            <a href="/"> ¿Qué es FLOREXUM? </a>
                            <a href="/"> RoadMap </a>
                            <a href="/"> Actividad Oculta </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;