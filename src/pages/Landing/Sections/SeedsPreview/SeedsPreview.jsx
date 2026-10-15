import seedsImage from '../../../../assets/seeds/seeds_img_temp.png';
import LockedSection from '../../../../components/LockedSection/LockedSection.jsx';
import styles from './SeedsPreview.module.css';
import { Link } from 'react-router';

function SeedsPreview() {

    return (
        <LockedSection message="Parece que todavía hay demasiada niebla...">
            <div className={styles.preview}>
                <h2 id="seeds-preview-title">
                    ¿Recibiste una semilla de los pobladores de Lunaria?
                </h2>
                <p>
                    Cada semilla tiene sus propios cuidados y de ellas brotan una planta distinta con habilidades únicas. Descubre de que tipo es tu semilla y cómo cuidarla.
                </p>
                <img
                    className={styles.image}
                    src={seedsImage}
                    alt="Semillas de lunaria"
                />
                <Link
                    to="/seeds"
                    className={styles.link}
                >
                    Ver semillas
                </Link>

            </div>
        </LockedSection>
    );
}
 
export default SeedsPreview;