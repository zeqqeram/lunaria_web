import { ACTIVITIES } from '../../../../features/roadmap/activities.js';
import styles from './Roadmap.module.css';

function Roadmap() {
    return (
        <section
            id="roadmap"
            className={styles.section}
            aria-labelledby="roadmap-title"
        >
            <header className={styles.header}>
                <h2 id="roadmap-title" className={styles.title}>
                    Roadmap de actividades
                </h2>
            </header>

            <ol className={styles.list}>
                {ACTIVITIES.map((activity) => (
                    <li
                        key={activity.id}
                        className={
                            activity.unlocked
                                ? styles.item
                                : `${styles.item} ${styles.itemLocked}`
                        }
                    >
                        <div
                            className={
                                activity.unlocked
                                    ? styles.circle
                                    : `${styles.circle} ${styles.circleLocked}`
                            }
                            aria-label={
                                activity.unlocked
                                    ? `Actividad ${activity.number}, desbloqueada`
                                    : `Actividad ${activity.number}, bloqueada`
                            }
                        >
                            {activity.unlocked ? (
                                <img
                                    className={styles.circleImage}
                                    src={activity.image}
                                    alt=""
                                />
                            ) : (
                                <span
                                    className={styles.circleNumber}
                                    aria-hidden="true"
                                >
                                    {activity.number}
                                </span>
                            )}
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.contentTitle}>
                                {activity.title}
                            </h3>

                            <p className={styles.contentText}>
                                {activity.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default Roadmap;