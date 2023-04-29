import React from 'react'
import './aboutUsMap.css'
const AboutUsMap = () => {
    const MapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.9150382590565!2d-61.073610777905856!3d-27.091384590733703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94474f1bd3e31ccf%3A0x1d8932c302cf7383!2sRESTAURANT%20IMPERIO%20DE%20SIEMPRE!5e0!3m2!1ses!2sar!4v1682427758350!5m2!1ses!2sar";
  return (
    <section className='aboutUsMap__container'>
        <div className='aboutUsMap__container_title'>
            <h2 className='aboutUsMap__title'>Nos encontramos en:</h2>
            <h2 className='aboutUsMap__title'>Fuerte Esperanza 655, H3722 Las Breñas, Chaco</h2>
        </div>
        
      <iframe 
      className='aboutUsMap__map'
      title='mapa de restaurant'
      width="90%"
      height="200px"
      src={MapURL} 
      frameBorder="0"
      loading='lazy'
      
      />
    </section>
  )
}

export default AboutUsMap
