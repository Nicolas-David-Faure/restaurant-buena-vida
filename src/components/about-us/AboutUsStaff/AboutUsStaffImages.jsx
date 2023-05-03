import React, { useEffect, useState } from 'react'
import { motion , AnimatePresence, useMotionValue, useTransform  } from 'framer-motion'

//css
import '../../../assets/css/about-us/aboutUsStaffImages.css'
const AboutUsStaffImages = ( { personal }) => {
  
  return (
<AnimatePresence>
    <motion.div 
    key={personal.src}
    transition={{ duration: .3}}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='AboutUsStaffImages'>
      <div className='AboutUsStaff__cont-img'>
        <img src={personal.src} alt="" />
      </div>
       
        <h4>{personal.name}</h4>
        <p>{personal.type}</p>
    </motion.div>
</AnimatePresence>


  )
}

export default AboutUsStaffImages
