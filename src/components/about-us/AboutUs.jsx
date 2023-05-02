import React, {  useState } from 'react'
import { motion } from 'framer-motion'
//components
import AboutUsDescription from './AboutUsDescription'
import AboutUsLocation from './AboutUsLocation'
import AboutUsStaff from './AboutUsStaff'
//Data
import personal from '../../data/staff.js'
//assets

import arrowUp  from '../../assets/svg/arrow-up.svg'
import  arrowDown from '../../assets/svg/arrow-down.svg'
import '../../assets/css/about-us/about-us.css'


const AboutUs = () => {
  const [countIndexStaff,setCountIndexStaff] = useState(0)
  const [displayDescription, setDisplayDescription] = useState(false)
  const [displayStaff, setDisplayStaff] = useState(false)
  const [displayLocation , setDisplayLocation] = useState(false)
 
  const iterateIndexStaff=()=>{
      setCountIndexStaff((prev)=>{
        if(countIndexStaff < 5){
         return prev + 1
        }else if(countIndexStaff == 5){
          return prev = 0
        }
      })  
  
  }
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


      <motion.div
       style={displayStaff ? 
       {display: "flex"} : 
       {display:"none"} }
       className='AboutUs__cont_staff'> 
          <p>En La Buena Vida creemos que nuestro equipo de trabajo es la clave de nuestro éxito y nos enorgullece presentarlos. 
          Conoce a las personas que hacen posible que cada platillo que servimos 
          sea una obra de arte culinaria y cada experiencia en nuestro restaurante sea inolvidable.</p>
       

        <div 
          id='AboutUs__cont_staff_description'
          className='AboutUs__cont_staff_description'> 
           {<AboutUsStaff personal={personal[countIndexStaff]}/>}
        </div> 

        <button 
        className="aboutUs__description_button" 
        onClick={iterateIndexStaff}>
          {countIndexStaff < 5 ? "Siguiente" : "Volver"}
        </button>
        
      </motion.div>
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
