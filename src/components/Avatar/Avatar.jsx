import styles from './Avatar.module.css';

function Avatar({ avatar, className = '' }) {
    if (!avatar) return null;

    return (
        <div
            className={[styles.avatar, className].filter(Boolean).join(' ')}
            aria-label="Vista previa del avatar"
        >
            <img
                className={styles.layer}
                src={`/avatars/skin/${avatar.skin}.png`}
                alt=""
            />

            {avatar.tShirt && (
                <img
                    className={styles.layer}
                    src="/avatars/clothes/tShirt.png"
                    alt=""
                />
            )}

            <img
                className={styles.layer}
                src={`/avatars/hair/${avatar.hair}.png`}
                alt=""
            />

            {avatar.flowerCrown && (
                <img
                    className={styles.layer}
                    src="/avatars/accessories/flowerCrown.png"
                    alt=""
                />
            )}
        </div>
    );
}

export default Avatar;