import { useState } from 'react';

import Avatar from '../Avatar/Avatar.jsx';
import styles from './AvatarEditor.module.css';

const AVATAR_OPTIONS = {
    skin: [
        { id: 'skin-1', label: 'Piel 1' },
        { id: 'skin-2', label: 'Piel 2' },
        { id: 'skin-3', label: 'Piel 3' },
        { id: 'skin-4', label: 'Piel 4' },
    ],
    hair: [
        { id: 'hair-1', label: 'Cabello 1' },
        { id: 'hair-2', label: 'Cabello 2' },
        { id: 'hair-3', label: 'Cabello 3' },
        { id: 'hair-4', label: 'Cabello 4' },
        { id: 'hair-5', label: 'Cabello 5' },
    ],
};

const DEFAULT_AVATAR = {
    skin: 'skin-1',
    hair: 'hair-1',
    flowerCrown: true,
    tShirt: true,
};

function AvatarEditor({
    initialAvatar,
    onSave,
    onCancel,
    saving = false,
}) {
    const [avatar, setAvatar] = useState(() => {
        const saved = initialAvatar ?? {};

        const validSkin = AVATAR_OPTIONS.skin.some(
            (option) => option.id === saved.skin,
        );

        const validHair = AVATAR_OPTIONS.hair.some(
            (option) => option.id === saved.hair,
        );

        return {
            ...DEFAULT_AVATAR,
            ...saved,
            skin: validSkin ? saved.skin : DEFAULT_AVATAR.skin,
            hair: validHair ? saved.hair : DEFAULT_AVATAR.hair,
            flowerCrown:
                typeof saved.flowerCrown === 'boolean'
                    ? saved.flowerCrown
                    : DEFAULT_AVATAR.flowerCrown,
            tShirt:
                typeof saved.tShirt === 'boolean'
                    ? saved.tShirt
                    : DEFAULT_AVATAR.tShirt,
        };
    });

    function updateAvatar(property, value) {
        setAvatar((current) => ({
            ...current,
            [property]: value,
        }));
    }

    function handleSave() {
        onSave(avatar);
    }

    return (
        <section className={styles.editor} aria-labelledby="avatar-title">
            <h2 id="avatar-title">Personaliza tu avatar</h2>

            <Avatar avatar={avatar} />

            <fieldset className={styles.options}>
                <legend>Tono de piel</legend>

                <div className={styles.choices}>
                    {AVATAR_OPTIONS.skin.map((option) => (
                        <button
                            key={option.id}
                            type="button"
                            className={
                                avatar.skin === option.id
                                    ? styles.selected
                                    : styles.choice
                            }
                            aria-pressed={avatar.skin === option.id}
                            onClick={() => updateAvatar('skin', option.id)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset className={styles.options}>
                <legend>Cabello</legend>

                <div className={styles.choices}>
                    {AVATAR_OPTIONS.hair.map((option) => (
                        <button
                            key={option.id}
                            type="button"
                            className={
                                avatar.hair === option.id
                                    ? styles.selected
                                    : styles.choice
                            }
                            aria-pressed={avatar.hair === option.id}
                            onClick={() => updateAvatar('hair', option.id)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </fieldset>

            <fieldset className={styles.options}>
                <legend>Accesorios y ropa</legend>

                <label>
                    <input
                        type="checkbox"
                        checked={avatar.flowerCrown}
                        onChange={(event) =>
                            updateAvatar('flowerCrown', event.target.checked)
                        }
                    />
                    Corona de flores
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={avatar.tShirt}
                        onChange={(event) =>
                            updateAvatar('tShirt', event.target.checked)
                        }
                    />
                    Remera
                </label>
            </fieldset>

            <div className={styles.actions}>
                {onCancel && (
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={onCancel}
                        disabled={saving}
                    >
                        Cancelar
                    </button>
                )}

                <button
                    className={styles.saveButton}
                    type="button"
                    onClick={handleSave}
                    disabled={saving}
                >
                    {saving ? 'Guardando...' : 'Guardar avatar'}
                </button>
            </div>
        </section>
    );
}

export default AvatarEditor;