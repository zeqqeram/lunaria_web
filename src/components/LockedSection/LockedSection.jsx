import { useState } from 'react';
import Countdown from '../Countdown/Countdown.jsx';
import styles from './LockedSection.module.css';

function LockedSection({ children, message }) {

    const [isRevealed, setIsRevealed] = useState(false);
    console.log('isRevealed:', isRevealed);
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                {children}
            </div>

            <div
                className={`${styles.overlay} ${isRevealed ? styles.overlayHidden : ''}`}
                aria-hidden={isRevealed}
            >
                <div className={styles.overlayContent}>
                    <p className={styles.message}>
                        {message}
                    </p>

                    <Countdown
                        onComplete={() => setIsRevealed(true)}
                        sticky={false}
                    />
                </div>
            </div>
        </section>
    );
}

export default LockedSection;