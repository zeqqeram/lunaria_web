import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Navegación principal">
                <div className={styles.leftGroup}>
                    <a  className={styles.logo} href="/"> LUNARIA </a>
                    <div className={styles.desktopLinks}>
                        <a className={styles.navLink} href="/"> About Us </a>
                        <a className={styles.navLink} href="/"> ¿Niebla? </a>
                    </div>
                </div>
                
                <button className={styles.menuButton} type='button' aria-label='Abrir menú'>
                    <span />
                    <span />
                    <span />
                </button>                    

                <a className={styles.login} href="/"> Iniciar Sesión </a>
            </nav>
        </header>
    );
}

export default Header;