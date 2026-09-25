import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.logo}> LUNARIA </p>
                <div className={styles.socials} aria-label='Redes Sociales'>
                <a href="/" aria-label='Red social 1'> O </a>
                <a href="/" aria-label='Red social 2'> 1 </a>
                <a href="/" aria-label='Red social 3'> 2 </a>
            </div>
            </div>
        </footer>
    );
}

export default Footer;