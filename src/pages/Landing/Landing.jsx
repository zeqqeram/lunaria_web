import { useEffect } from 'react';
import { useLocation } from 'react-router';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Countdown from '../../components/Countdown/Countdown.jsx';
import Hero from '../Landing/Sections/Hero/Hero.jsx';
import FirstDiscovery from './Sections/FirstDiscovery/FirstDiscovery.jsx';
import SeedsPreview from './Sections/SeedsPreview/SeedsPreview.jsx';
import Roadmap from './Sections/Roadmap/Roadmap.jsx';

function Landing() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const element = document.getElementById(hash.slice(1));
        if (!element) return;

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [hash]);

    return (
        <>
            <Header />

            <Countdown />

            <main>
                <Hero />
                <Roadmap />
                <SeedsPreview />
                
            </main>

            <Footer />
        </>
    );
}

export default Landing;