import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Hero from '../Landing/Sections/Hero/Hero.jsx'
import About from '../Landing/Sections/About/About.jsx'
import HiddenSection from '../Landing/Sections/HiddenSection/HiddenSection.jsx'

function Landing() {
    return (
    <>
    <Header />
    <main>
        <Hero />
        <About />
        <HiddenSection />
    </main>
    <Footer />
    </>
    );
}

export default Landing;