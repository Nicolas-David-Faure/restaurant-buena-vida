import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

//Data
import descriptionAboutus from '../../../data/descriptionAboutUs.js'
//assets
import '../../../assets/css/about-us/aboutUsDescription.css'
const AboutUsDescription = () => {
    const [conunterDescripcionIndex, setCounterDescriptionIndex] = useState(0) 
    const sumCounterDescriptionIndex =()=>{
        if(conunterDescripcionIndex < 3){
          setCounterDescriptionIndex(conunterDescripcionIndex +1)
        }
        if(conunterDescripcionIndex === 3){
          setCounterDescriptionIndex(0)
        }
       } 
  return (
    <motion.div
      layout
      initial={{
        opacity:0,
        y:-100
      }}
      animate={{
        display:"flex",
        opacity:1,
        y:0,
        transition:{
          duration:1,
          type: "spring",
          
       }
    }}
      className='aboutUs__cont_description'>
        <p>
            {descriptionAboutus[conunterDescripcionIndex] 
            /*se toma el array descriptionAboutus y se lo itera manualmente mediante el boton siguiente*/}
        </p>
          <motion.button 
          whileTap={{
            scale:1.01
        }}  
          whileHover={{
            backgroundColor:"#cb9357",
            scale:1.02
          }}
           animate={{
                opacity:1,
                transition:{
                duration:.5
              }
           }}
          onClick={sumCounterDescriptionIndex} 
          className='aboutUs__description_button'>{conunterDescripcionIndex === 3 ?"Volver" : "Siguiente"}
          </motion.button>
      </motion.div>
  )
}

export default AboutUsDescription
