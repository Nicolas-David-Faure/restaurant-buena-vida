import React, { useState , useEffect , useRef} from 'react'
import AboutUsMap from './map/AboutUsMap'
import '../../../assets/css/about-us/aboutUsLocation.css'
const AboutUsLocation = () => {
  return (
    <div className='AboutUsLocation'>
      <AboutUsMap />
    </div>
  )
}

export default AboutUsLocation
