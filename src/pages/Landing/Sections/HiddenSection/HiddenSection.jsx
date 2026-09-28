import { useCallback, useState } from 'react';
import AccessGate from '../../../../features/access/AccessGate';
import Map from '../../../../features/map/Map';
import styles from './HiddenSection.module.css';

function HiddenSection() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isInsideZone, setIsInsideZone] = useState(false);
    const [isExperienceStarted, setIsExperienceStarted] = useState(false);
    const handleZoneStatusChange = useCallback((isInsideZone) => {
        setIsInsideZone(isInsideZone);
    }, []);

    return (
        <section className={styles.section} aria-labelledby='hidden-section-title'>
            <div className={styles.content}>
                <h2 id='hidden-section-title'>
                    {isUnlocked ? 'Lograste despejar la niebla' : '¿niebla?'}
                </h2>
                {isUnlocked ? (
                    <div className={styles.realContent}>
                        <p>
                            En esta sección encontrarás algo que todavia permanece oculto
                        </p>

                        <Map onZoneStatusChange={handleZoneStatusChange} />
                        {isInsideZone && (
                            <button type='button' onClick={() => setIsExperienceStarted(true)}>
                                Explorar
                            </button>
                        )}
                        {isExperienceStarted && (
                            <p>
                                La experiencia de cámara empieza acá
                            </p>
                        )}
                    </div>
                ) : (
                    <div className={styles.mist}>
                        <p className={styles.message}>
                            Parece que hay mucha niebla en esta zona...
                        </p>

                        <AccessGate onUnlock={() => setIsUnlocked(true)} />
                    </div>
                )
                }
            </div>
        </section>
    );
}

export default HiddenSection;