import React from 'react'
import '../../assets/css/contact/contact.css'
import facebook from '../../assets/svg/social/facebook.svg'
import instagram from '../../assets/svg/social/instagram.svg'
import whatsApp from '../../assets/svg/social/whatsApp.svg'
import phoneCallIcon from '../../assets/svg/social/phone-call.svg'
import emailIcon from '../../assets/svg/social/email.svg'
const Contact = () => {
  return (
    <section className='Contact'>
        <div className='contact__cont_title'>
            <h2 className='contact__title'>Contacto</h2>
        </div>

        <div className='contact__info'>
            <p className='contact__p p_description'>Si desea realizar algún comunicado o realizar alguna consulta 
                por favor no dude en contactarnos, su consulta no nos molesta</p>
                <div className='contact__info_divs'>
                    <img src={phoneCallIcon}className='icon-info'  alt='icon-phone'/>
                    <p className='contact__p p_number'>+54 1234-567890</p>
                </div>
                <div className='contact__info_divs'>
                    <img src={emailIcon} className='icon-info' alt='icon-email'/> 
                    <p className='contact__p p_email'>any_restaurant@anyDomain.com</p>
                </div>
          
        </div>  
        <div className='contact__cont_social'>
            <a target='black' href='https://www.facebook.com/'>
                <img className='contact_social icon-facebook' src={facebook} alt="icon-facebook" />
            </a>
            <a target='black' href='https://www.instagram.com/'>
                <img className='contact_social icon-instagram' src={instagram} alt="icon-instagram" />
            </a>
            <a target='black' href='https://www.whatsapp.com/'>
                <img className='contact_social icon-whatsApp' src={whatsApp} alt="icon-whatsApp" />
            </a>
        </div>
    </section>
  )
}

export default Contact
