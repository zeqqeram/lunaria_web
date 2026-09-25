import styles from './About.module.css';

function About(){
    return(
        <section className={styles.about} aria-labelledby="about-title">
            <div className={styles.content}>
                <h2 id="about-title"> About Us </h2>
                <p>
                    LUNARIA es una experiencia donde la naturaleza, la fantasía y la tecnología se encuentran para invitarte a descubrir algo que permanece oculto.
                </p>
                <a className={styles.cta} href="/"> Conocé Más </a>
            </div>
        </section>
    );
}

export default About;