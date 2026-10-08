import Map from '../../features/map/Map.jsx';
import Styles from './SeedsPage.module.css';

function SeedsPage() {
    return (
        <main className={Styles.page}>
            <h1> Mapa </h1>
            <Map />
        </main>
    );
}

export default SeedsPage;