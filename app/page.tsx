import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Barbers from '../components/Barbers';
import Reviews from '../components/Reviews';
import FindUs from '../components/FindUs';
import Socials from '../components/Socials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Barbers />
        <Reviews />
        <FindUs />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
