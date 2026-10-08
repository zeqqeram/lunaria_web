import discoveryMap from '../../../../assets/discovery/first-discovery.svg';
import LockedSection from '../../../../components/LockedSection/LockedSection.jsx';
import styles from './FirstDiscovery.module.css';
import { Link } from 'react-router';

function FirstDiscovery() {

    return (
        <LockedSection message="Parece que todavía hay demasiada niebla...">
            <div className={styles.discovery}>
                <h2 id="first-discovery-title">
                    Primer floración descubierta en la ciudad
                </h2>

                <p>
                    Se reportaron las primeras apariciones de floración
                    mejorada de lunaria a causa del nuevo Florexum de este
                    año. Puedes ir a visitarlas para reclamar tu premio:
                </p>

                <div className={styles.map}>
                    <img
                        src={discoveryMap}
                        alt="Primer descubrimiento de floraciones del FLOREXUM con una zona radial marcada"
                    />
                </div>
                <Link
                    to="/map"
                    className={styles.link}
                >
                        Ver mapa
                </Link>
            </div>
        </LockedSection>
    );

}

export default FirstDiscovery;

