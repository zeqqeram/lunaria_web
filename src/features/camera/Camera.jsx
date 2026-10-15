import { useEffect, useRef, useState } from "react";
import styles from './Camera.module.css';

function Camera() {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let stream;

        async function startCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: 'environment',
                    },
                    audio: false,
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch {
                setError('No se pudo acceder a la cámara');
            }
        }

        startCamera();

        return () => {
            stream?.getTracks().forEach((track) => {
                track.stop();
            });
        };
    }, []);

    if (error) {
        return (
            <section className={styles.camera}>
                <h2>Cámara</h2>
                <p>{error}</p>
            </section>
        );
    }

    return (
        <section className={styles.camera}>
            <h2>Cámara</h2>
            <video ref={videoRef} autoPlay playsInline muted />
        </section>
    );
}

export default Camera;