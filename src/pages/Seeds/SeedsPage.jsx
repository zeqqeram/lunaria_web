import { useState } from 'react';

import { SEEDS } from '../../features/seeds/seeds.js';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Styles from './SeedsPage.module.css';

function SeedsPage() {
    const [activeSeedId, setActiveSeedId] = useState(
        SEEDS[0]?.id ?? null,
    );

    const activeSeed =
        SEEDS.find((seed) => seed.id === activeSeedId) ?? null;

    return (
        <>
            <Header />

            <main className={Styles.page}>
                <div className={Styles.shell}>
                    <nav
                        className={Styles.selector}
                        aria-label="Semillas disponibles"
                    >
                        <ul className={Styles.selectorList}>
                            {SEEDS.map((seed) => {
                                const isActive =
                                    seed.id === activeSeedId;

                                return (
                                    <li
                                        key={seed.id}
                                        className={Styles.selectorItem}
                                    >
                                        <button
                                            type="button"
                                            className={
                                                isActive
                                                    ? Styles.thumbActive
                                                    : Styles.thumb
                                            }
                                            onClick={() =>
                                                setActiveSeedId(seed.id)
                                            }
                                            aria-pressed={isActive}
                                            aria-label={seed.name}
                                            title={seed.name}
                                        >
                                            <img
                                                src={seed.thumb}
                                                alt=""
                                                className={Styles.thumbImage}
                                            />
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {activeSeed && (
                        <section
                            className={Styles.detail}
                            aria-label={`Detalle de ${activeSeed.name}`}
                        >
                            <div className={Styles.plantWrap}>
                                <img
                                    className={Styles.plant}
                                    src={activeSeed.plant}
                                    alt={activeSeed.name}
                                />
                            </div>

                            <div className={Styles.info}>
                                <h1 className={Styles.name}>
                                    {activeSeed.name}
                                </h1>

                                <p className={Styles.variety}>
                                    {activeSeed.variety}
                                </p>

                                <ul className={Styles.features}>
                                    {activeSeed.features.map(
                                        (feature) => (
                                            <li
                                                key={feature.label}
                                                className={
                                                    Styles.feature
                                                }
                                            >
                                                <span
                                                    className={
                                                        Styles.featureIcon
                                                    }
                                                    aria-hidden="true"
                                                >
                                                    {feature.icon}
                                                </span>
                                                <span
                                                    className={
                                                        Styles.featureLabel
                                                    }
                                                >
                                                    {feature.label}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>

                                <p className={Styles.description}>
                                    {activeSeed.description}
                                </p>
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default SeedsPage;