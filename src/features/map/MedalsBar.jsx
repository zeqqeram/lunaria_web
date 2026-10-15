import styles from './MedalsBar.module.css';

function MedalsBar({ zones, activeZoneId, onSelectZone }) {
    return (
        <div
            className={styles.bar}
            role="group"
            aria-label="Zonas del tesoro"
        >
            {zones.map((zone) => {
                const isActive = zone.id === activeZoneId;

                return (
                    <button
                        key={zone.id}
                        type="button"
                        className={isActive ? styles.slotActive : styles.slot}
                        onClick={() => onSelectZone(zone.id)}
                        disabled={!zone.unlocked}
                        aria-pressed={isActive}
                        aria-label={
                            zone.unlocked
                                ? zone.label
                                : `${zone.label} (bloqueada)`
                        }
                        title={zone.unlocked ? zone.label : 'Bloqueada'}
                    >
                        {zone.unlocked ? (
                            <img
                                className={styles.medalImage}
                                src={zone.image}
                                alt=""
                            />
                        ) : (
                            <span className={styles.lock} aria-hidden="true">
                                🔒
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}

export default MedalsBar;