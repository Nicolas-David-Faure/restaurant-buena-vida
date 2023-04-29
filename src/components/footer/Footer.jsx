import React, { useState } from 'react'
import '../../assets/css/footer/footer.css'
import akuImg from '../../assets/imagenes/footer/aku.png'
const termsAndConditionsURL = './pages/termsAndCondition/termsAndConditions.html'
const policyPrivacyURL = './pages/privacyPolicy/privacyPolicy.html'

const Footer = () => {
  const [displayTermsAndConditions, setDisplatTermsAndConditions]= useState(false)


  return (
    <footer className='footer__container'>
      {displayTermsAndConditions ? <TermsAndConditions />: null}
       <div className='footer__cont_main'>
        <div className='footer__cont_links'>
            <a className='footer__links' target='blank' href='https://nicolas-david-faure.github.io/portfolio-23-03-2023/'>Contactar al desarrollador</a>           
            <a className='footer__links' 
              href={termsAndConditionsURL} target='blank'
            >Terminos y condiciones</a>
            
            <a className='footer__links' target='blank' href={policyPrivacyURL}>Políticas de privacidad</a>
        </div>
        <div className='footer__cont_logo'>
              <img className='footer__logo' src={akuImg} alt="imagen Aku" />
        </div>
            
           
        </div>
       
        <div className='footer__cont-copyright'>
              <p>©Copyright Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer
