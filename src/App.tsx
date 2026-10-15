import './App.css'
import FAQ from './components/FAQ/FAQ'
import Header from './components/Header/Header'
import OurBenefits from './components/OurBenefits/OurBenefits'
import OurTestimonials from './components/OurTestimonials/OurTestimonials'
import OurPages from './components/OurPages/OurPages';
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <Header />
      <main>
        <OurBenefits />
        <OurTestimonials />
        <FAQ />
        <OurPages />

      </main>
      <Footer />
    </>

  )
}

export default App
