import styles from './Map.module.css';

function ZoneOverlay({ zone, onEnter }) {
    if (!zone) return null;

    return (
        <div
            className={styles.overlay}
            role="dialog"
            aria-label={`Zona de ${zone.label}`}
        >
            <div className={styles.overlayCard}>
                <p className={styles.overlayTitle}>
                    ¡Estás dentro de la zona de {zone.label}!
                </p>

                <button
                    type="button"
                    className={styles.enterButton}
                    onClick={onEnter}
                >
                    Entrar a la experiencia
                </button>
            </div>
        </div>
    );
}

export default ZoneOverlay;