import React, { useEffect, useState } from 'react'
import '../../assets/css/about-us/aboutUsStaff.css'
import { motion , AnimatePresence, useMotionValue, useTransform  } from 'framer-motion'
const AboutUsStaff = ( { personal }) => {
  
 

  return (
<AnimatePresence>
    <motion.div 
    key={personal.src}
    transition={{ duration: .3}}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='AboutUsStaff'>
      <div className='AboutUsStaff__cont-img'>
        <img src={personal.src} alt="" />
      </div>
       
        <h4>{personal.name}</h4>
        <p>{personal.type}</p>
    </motion.div>
</AnimatePresence>


  )
}

export default AboutUsStaff
