import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Reviews />
        <Gallery />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
