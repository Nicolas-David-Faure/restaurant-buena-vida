
import Reservations from './components/reservations/Reservations.jsx'
//components
import MenuDesplegable from './components/Menu.jsx'
import FoodMenu from './components/FoodMenu.jsx'
import Banner from './components/Banner.jsx'
import AboutUs from './components/about-us/AboutUs.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
     <MenuDesplegable />
     <Banner />
     <FoodMenu />
     <Reservations />
     <AboutUs />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
