import Map from '../../features/map/Map.jsx';
import Styles from './MapPage.module.css';

function MapPage() {
    return (
        <main className={Styles.page}>
            <h1> Mapa </h1>
            <Map />
        </main>
    );
}

export default MapPage;