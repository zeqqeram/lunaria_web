import { useEffect, useRef, useState } from 'react';
import styles from './Countdown.module.css';

const TARGET_DATE = new Date('2026-11-12T13:00:00-03:00');

function Countdown ({onComplete, sticky = true}) {
    const [timeLeft, setTimeLeft] = useState(TARGET_DATE.getTime() - Date.now());
    const hasCompletedRef = useRef(false);
    
    useEffect (() => {
        function updateCountdown () {
            const nextTimeLeft = TARGET_DATE.getTime() - Date.now();
            setTimeLeft(nextTimeLeft);            
        }

        updateCountdown();

        const intervalId = setInterval(updateCountdown, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const isComplete = timeLeft <= 0;

    useEffect(() => {
        if (!isComplete || !onComplete || hasCompletedRef.current) {
            return;            
        }

        hasCompletedRef.current = true;
        onComplete();
    }, [isComplete, onComplete]);

    const totalSeconds = Math.max(0, Math.floor(timeLeft/ 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedHours = String(hours).padStart(2,'0');
    const formattedMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(seconds).padStart(2,'0');

    return (
        <div className={`${styles.countdown} ${sticky ? '' : styles.inline}`} aria-label={`Tiempo restante: ${formattedHours} horas, ${formattedMinutes} minutos y ${formattedSeconds} segundos`}>
            <span>{formattedHours}</span>
            <span>:</span>
            <span>{formattedMinutes}</span>    
            <span>:</span>
            <span>{formattedSeconds}</span>
        </div>
    );
}

export default Countdown;