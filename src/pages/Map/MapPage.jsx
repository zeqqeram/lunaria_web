import { useState } from 'react';
import { useNavigate } from 'react-router';

import Map from '../../features/map/Map.jsx';
import MedalsBar from '../../features/map/MedalsBar.jsx';
import { ZONES } from '../../features/map/zones.js';
import Styles from './MapPage.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function MapPage() {
    const navigate = useNavigate();
    const [activeZoneId, setActiveZoneId] = useState(null);

    const activeZone =
        ZONES.find((zone) => zone.id === activeZoneId) ?? null;

    function handleSelectZone(zoneId) {
        setActiveZoneId((current) =>
            current === zoneId ? null : zoneId,
        );
    }

    function handleEnterExperience() {
        if (!activeZoneId) return;

        navigate('/map/camera', {
            state: { activeZoneId },
        });
    }

    return (
        <>
            <Header />
            <main className={Styles.page}>
                <h1>Mapa</h1>

                <MedalsBar
                    zones={ZONES}
                    activeZoneId={activeZoneId}
                    onSelectZone={handleSelectZone}
                />

                <Map
                    activeZone={activeZone}
                    onEnterExperience={handleEnterExperience}
                />
            </main>
            <Footer />
        </>
    );
}

export default MapPage;
