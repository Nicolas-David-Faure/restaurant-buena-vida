import React, { useEffect, useState, useRef} from 'react'
import '../../assets/css/about-us/about-us.css'
import AboutUsStaff from './AboutUsStaff'
import personal from '../../data/staff.js'
import descriptionAboutus from '../../data/descriptionAboutUs.js'
import AboutUsLocation from './AboutUsLocation'
import { motion , AnimatePresence  } from 'framer-motion'
import arrowUp  from '../../assets/svg/arrow-up.svg'
import  arrowDown from '../../assets/svg/arrow-down.svg'
const showDescriptionVariants = {
  open:{
    display:"flex",
    opacity:[0,0.3,0.5,0.8,1],
    y:[100,75,50,25,0],
      transition:{
        duration:1,
        type: "spring",
        bounce:0.5
     }},
  closed:{
    display:"none",
    opacity:0,
      transition:{
        duration: 1,
        type: "spring",
        bounce:0.5,
     }}}

     const animateBtn = {
      open:{
        opacity:1,
        y: 0,
        transition:{
        duration:.5
      },
      close:{
        opacity:0,
        y:200
      }
     }}
const AboutUs = () => {
  const descriptionRef = useRef()
  const [conunterDescripcionIndex, setCounterDescriptionIndex] = useState(0) 
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
 const sumCounterDescriptionIndex =()=>{
  if(conunterDescripcionIndex < 3){
    setCounterDescriptionIndex(conunterDescripcionIndex +1)
  }
  if(conunterDescripcionIndex === 3){
    setCounterDescriptionIndex(0)
  }
 } 

  return (
    <section className='AboutUs'>
      <div className='aboutUs__cont_title'>
        <h2>Sobre nosotros</h2>
      </div>
      <div className='AboutUs__title_description'
       onClick={()=>setDisplayDescription(()=>!displayDescription)} >
        <h2>Descripcion</h2><img src={displayDescription ? arrowUp : arrowDown}/>
      </div>
 
      <motion.div
      ref={descriptionRef} 
      layout
     
      animate={displayDescription ? "open" : "closed"}
      variants={showDescriptionVariants}
     
      className='aboutUs__cont_description'>

        <p>
            {descriptionAboutus[conunterDescripcionIndex] /*se toma el array descriptionAboutus y se lo itera manualmente mediante el boton siguiente*/ }
        </p>
        
      
          <motion.button

          initial={{y:100}}
           whileHover={{
            backgroundColor:"#cb9357",
            scale:1.02
          }}
           animate={displayDescription ? "open" : "close"}
          variants={animateBtn}
          onClick={sumCounterDescriptionIndex} 
          className='aboutUs__description_button'>{conunterDescripcionIndex === 3 ?"Volver" : "Siguiente"}
          </motion.button>
     
      
      </motion.div>
  
      <div className='AboutUs__title_description' onClick={()=>setDisplayStaff(()=>!displayStaff)} >
        <h2>Personal</h2><img src={displayStaff ? arrowUp : arrowDown}/>
      </div>
      <motion.div
       style={displayStaff ? {display: "flex"} : {display:"none"} }className='AboutUs__cont_staff'> 
        <p>
          En La Buena Vida creemos que nuestro equipo de trabajo es la clave de nuestro éxito y nos enorgullece presentarlos. Conoce a las personas que hacen posible que cada platillo que servimos 
          sea una obra de arte culinaria y cada experiencia en nuestro restaurante sea inolvidable.
        </p>
        <div id='AboutUs__cont_staff_description' className='AboutUs__cont_staff_description'> 
           {
            <AboutUsStaff
             personal={personal[countIndexStaff]}/>  }
        </div> 
        <button className="aboutUs__description_button" onClick={iterateIndexStaff}>{countIndexStaff < 5 ? "Siguiente" : "Volver"}</button>
        
      </motion.div>
      <div className='AboutUs__title_description' onClick={()=>setDisplayLocation(()=>!displayLocation)} >
        <h2>Ubicación</h2><img src={displayLocation ? arrowUp : arrowDown}/>
      </div>
      <div style={displayLocation ? {display: "flex"} : {display:"none"}} className='AboutUs__cont_location'>
          <AboutUsLocation />
      </div>
    </section>
  )
}

export default AboutUs
