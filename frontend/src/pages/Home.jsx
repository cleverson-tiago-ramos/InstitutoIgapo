// pages/Home.jsx
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Activities from '../components/Activities/Activities';
import Location from '../components/Location/Location';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Activities />
      <Location />
      <Partners />
      <Footer />
    </>
  );
}
