import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Countdown from '../../components/Countdown/Countdown.jsx';
import Hero from '../Landing/Sections/Hero/Hero.jsx';
import FirstDiscovery from './Sections/FirstDiscovery/FirstDiscovery.jsx';
import SeedsPreview from './Sections/SeedsPreview/SeedsPreview.jsx';

function Landing() {
    return (
        <>
            <Header />

            <Countdown />

            <main>
                <Hero />
                
                <FirstDiscovery />
                <SeedsPreview />
            </main>

            <Footer />
        </>
    );
}

export default Landing;