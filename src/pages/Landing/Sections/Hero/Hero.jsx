import styles from './Hero.module.css';

function Hero() {

    return(
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.background} aria-hidden='true' />
            <div className={styles.overlay} aria-hidden='true' />
            
            <div className={styles.content}>
                <h1 id="hero-title"> Florexum </h1>
                <p className={styles.description}>
                    La primavera trae consigo algo extraordinario. La naturaleza comienza a despertar y pronto la ciudad se llenará de magia, encuentros y celebración.
                </p>
                <a className={styles.cta} href="/"> QUIERO SER PARTE </a>
            </div>
        </section>
    );
}

export default Hero;