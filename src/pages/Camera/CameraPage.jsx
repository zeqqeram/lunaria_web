import { useLocation, useNavigate } from 'react-router';

import Camera from '../../features/camera/Camera.jsx';
import Header from '../../components/Header/Header.jsx';
import Styles from './CameraPage.module.css';

function CameraPage() {
    const navigate = useNavigate();
    const location = useLocation();

    // Disponible para cuando la cámara necesite saber la zona.
    const activeZoneId = location.state?.activeZoneId ?? null;

    function handleClose() {
        navigate(-1);
    }

    return (
        <>
            <Header />
            <main className={Styles.page}>
                <div className={Styles.header}>
                    <h1>Experiencia</h1>

                    <button
                        type="button"
                        className={Styles.closeButton}
                        onClick={handleClose}
                    >
                        Volver al mapa
                    </button>
                </div>

                <Camera zoneId={activeZoneId} />
            </main>
        </>
    );
}

export default CameraPage;