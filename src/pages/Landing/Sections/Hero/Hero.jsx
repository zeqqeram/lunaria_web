import styles from './Hero.module.css';

function Hero() {

    return(
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.background} aria-hidden='true' />
            <div className={styles.overlay} aria-hidden='true' />
            
            <div className={styles.content}>
                <h1 id="hero-title"> Florexum </h1>
                <p className={styles.description}>
                    ¿Estás preparado para el florecimiento de la lunaria? Preparate para el evento que define gran parte de tu futuro en el gran universo de Lunaria
                </p>
                <a className={styles.cta} href="/"> DESCUBRIR </a>
            </div>
        </section>
    );
}

export default Hero;