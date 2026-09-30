import styles from './Hero.module.css';

function Hero() {

    return(
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.background} aria-hidden='true' />
            <div className={styles.overlay} aria-hidden='true' />
            
            <div className={styles.content}>
                <h1 id="hero-title"> LUNARIA </h1>
                <p className={styles.description}>
                    ¿Estás preparado/a para descubrir un nuevo universo?
                </p>
                <a className={styles.cta} href="/"> DESCUBRIR </a>
            </div>
        </section>
    );
}

export default Hero;