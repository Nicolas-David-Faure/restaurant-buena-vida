import React, { useState } from 'react'
import { motion } from 'framer-motion'
//component
import AboutUsStaffImages from './AboutUsStaffImages.jsx'
//data
import personal from '../../../data/staff.js'
//css
import '../../../assets/css/about-us/aboutUsStaff.css'
const AboutUsStaff = () => {
    const [countIndexStaff,setCountIndexStaff] = useState(0)
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
     <motion.div
        initial={{
            y:-100,
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1,
            transition:{
                duration:1,
                type:"spring"
            }
        }}
       className='AboutUs__cont_staff'> 
          <p>En La Buena Vida creemos que nuestro equipo de trabajo es la clave de nuestro éxito y nos enorgullece presentarlos. 
          Conoce a las personas que hacen posible que cada platillo que servimos 
          sea una obra de arte culinaria y cada experiencia en nuestro restaurante sea inolvidable.</p>
        <div 
          id='AboutUs__cont_staff_description'
          className='AboutUs__cont_staff_description'> 
           {<AboutUsStaffImages personal={personal[countIndexStaff]}/>}
        </div> 

        <motion.button
        whileTap={{
            scale:1.01
        }}
        whileHover={{
            backgroundColor:"#cb9357",
            scale:1.02
          }} 
        className="aboutUs__description_button" 
        onClick={iterateIndexStaff}>
          {countIndexStaff < 5 ? "Siguiente" : "Volver"}
        </motion.button>
        
      </motion.div>
  )
}

export default AboutUsStaff
