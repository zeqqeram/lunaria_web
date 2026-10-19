import styles from './Hero.module.css';

const FLOWER_IMAGE_SRC = '';
const FLOWER_IMAGE_ALT = 'Flor cerrada a punto de abrirse';

// Bloque de texto izquierdo
const LEFT_BLOCK = {
    title: 'El despertar',
    text: 'La primavera trae consigo algo extraordinario. La naturaleza comienza a despertar y pronto la ciudad se llenará de magia, encuentros y celebración.',
};

// Bloque de texto derecho (texto provisional)
const RIGHT_BLOCK = {
    title: 'La magia de florecer',
    text: 'Cada flor guarda una promesa silenciosa. Cuando se abra, el aire cambiará de color y la ciudad entera se llenará de aromas, luz y deseos.',
};

function Hero() {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.background} aria-hidden="true" />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
                <h1 id="hero-title">Florexum</h1>

                <div className={styles.composition}>
                    <div className={`${styles.textBlock} ${styles.textLeft}`}>
                        <h2 className={styles.textTitle}>{LEFT_BLOCK.title}</h2>
                        <p className={styles.description}>{LEFT_BLOCK.text}</p>
                    </div>

                    <div className={styles.flower}>
                        {FLOWER_IMAGE_SRC ? (
                            <img
                                className={styles.flowerImage}
                                src={FLOWER_IMAGE_SRC}
                                alt={FLOWER_IMAGE_ALT}
                            />
                        ) : (
                            <div className={styles.flowerPlaceholder}>
                                Espacio para la imagen de la flor cerrada
                            </div>
                        )}
                    </div>

                    <div className={`${styles.textBlock} ${styles.textRight}`}>
                        <h2 className={styles.textTitle}>{RIGHT_BLOCK.title}</h2>
                        <p className={styles.description}>{RIGHT_BLOCK.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
