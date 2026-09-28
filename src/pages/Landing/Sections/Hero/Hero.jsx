import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const TARGET_DATE = new Date('2026-09-28T15:30:00-03:00');

function Hero() {
    const [timeLeft, setTimeLeft] = useState (TARGET_DATE.getTime() - Date.now(),);

    useEffect (() => {
        const intervalid = setInterval(() => {
            setTimeLeft(TARGET_DATE.getTime() - Date.now());
        }, 1000);
        return () => {
            clearInterval(intervalid);
        };
    }, []);

    const totalSeconds = Math.max(0, Math.floor(timeLeft/ 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2,'0');
    const formattedMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(seconds).padStart(2,'0');

    return(
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.background} aria-hidden='true' />
            <div className={styles.overlay} aria-hidden='true' />
            <div className={styles.countdown} aria-label={`Tiempo restante: ${formattedHours} horas, ${formattedMinutes} minutos y ${formattedSeconds} segundos`}>
                <span>{formattedHours}</span>
                <span>:</span>
                <span>{formattedMinutes}</span>    
                <span>:</span>
                <span>{formattedSeconds}</span>
            </div>
            
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