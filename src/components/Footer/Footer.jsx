import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.logo}>LUNARIA</p>

                <div
                    className={styles.socials}
                    aria-label="Redes sociales"
                >
                    <a
                        className={styles.socialLink}
                        href="https://www.instagram.com/lunaria.tdm3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de LUNARIA, @lunaria.tdm3"
                    >
                        <img
                            className={styles.socialIcon}
                            src="/socials/instagram.png"
                            alt=""
                        />
                        <span className={styles.socialHandle}>
                            @lunaria.tdm3
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;