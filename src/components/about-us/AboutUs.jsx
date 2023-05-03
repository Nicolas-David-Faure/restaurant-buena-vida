import React, {  useState } from 'react'
import { motion } from 'framer-motion'
//components
import AboutUsDescription from './AboutUsDescription'
import AboutUsLocation from './AboutUsLocation'
import AboutUsStaff from './AboutUsStaff/AboutUsStaff'
//Data

//assets
import arrowUp  from '../../assets/svg/arrow-up.svg'
import  arrowDown from '../../assets/svg/arrow-down.svg'
import '../../assets/css/about-us/about-us.css'


const AboutUs = () => {
  
  const [displayDescription, setDisplayDescription] = useState(false)
  const [displayStaff, setDisplayStaff] = useState(false)
  const [displayLocation , setDisplayLocation] = useState(false)
 
  
  return (
    <section className='AboutUs'>
      <div className='aboutUs__cont_title'>
        <h2>Sobre nosotros</h2>
      </div>
      {/*When the div AboutUs__title_description the component AboutUsDescription is rendered*/}
      <div className='AboutUs__title_description'
       onClick={()=>setDisplayDescription(()=>!displayDescription)} >
        <h2>Descripcion</h2>
        <img src={displayDescription ? arrowUp : arrowDown}/>
      </div>
          {displayDescription ? <AboutUsDescription /> : undefined}


      {/*When the div AboutUs__title_description the component AboutUsDescription is rendered*/}
      <div className='AboutUs__title_description' 
      onClick={()=>setDisplayStaff(()=>!displayStaff)} >
        <h2>Personal</h2>
        <img src={displayStaff ? arrowUp : arrowDown}/>
      </div>
     {displayStaff ? <AboutUsStaff /> : undefined}
     
      <div 
      className='AboutUs__title_description' 
      onClick={()=>setDisplayLocation(()=>!displayLocation)}>
        <h2>Ubicación</h2>
        <img src={displayLocation ? arrowUp : arrowDown}/>
      </div>
      <div 
      style={
        displayLocation ?
        {display: "flex"} :
        {display:"none"}
        } 
          className='AboutUs__cont_location'>
          <AboutUsLocation />
      </div>
    </section>
  )
}

export default AboutUs
