import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

const TARGET_DATE = new Date('2026-09-30T20:15:00-03:00');

function Countdown () {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect (() => {
        const updateTimeLeft = () => {
            setTimeLeft(TARGET_DATE.getTime() - Date.now());
        };
        updateTimeLeft();

        const intervalId = setInterval(updateTimeLeft, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const totalSeconds = Math.max(0, Math.floor(timeLeft/ 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2,'0');
    const formattedMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(seconds).padStart(2,'0');

    return (
        <div className={styles.countdown} aria-label={`Tiempo restante: ${formattedHours} horas, ${formattedMinutes} minutos y ${formattedSeconds} segundos`}>
            <span>{formattedHours}</span>
            <span>:</span>
            <span>{formattedMinutes}</span>    
            <span>:</span>
            <span>{formattedSeconds}</span>
        </div>
    );
}

export default Countdown;