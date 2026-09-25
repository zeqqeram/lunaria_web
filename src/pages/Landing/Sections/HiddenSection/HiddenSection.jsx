import styles from './HiddenSection.module.css';

function HiddenSection() {
    return(
        <section className={styles.section} aria-labelledby='hidden-section-title'>
            <div className={styles.content}>
                <h2> ¿NIEBLA? </h2>
                <div className={styles.overlay}>
                    <p>
                        Parece que la niebla es muy espesa en esta zona...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HiddenSection;