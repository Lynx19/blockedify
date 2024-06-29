import React, {useState, useEffect} from 'react'
import Navbar from './components/navbar'
import Welcome from './components/welcome'
import Preloader from './components/loader/preloader'
import About from './components/aboutus'
import Mission from './components/mission'
import Services from './components/service'
import Choose from './components/choose'
import Event from './components/Event'
import Footer from './components/Footer'


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, {})
  
  return (
    <div >
     
    {
      loading?
     <Preloader/>
      :
      <div>
        <Navbar/>
        <Welcome/>
        <About/> 
        <Mission/>
        <Services/>
        <Choose/>
        <Event/>
        <Footer/>
      </div>
      }
    </div>
  );
}

export default App;
