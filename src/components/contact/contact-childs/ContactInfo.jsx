import React from 'react'

//css
import '../../../assets/css/contact/ContactInfo.css'
//icons
import phoneCallIcon from '../../../assets/svg/social/phone-call.svg'
import emailIcon from '../../../assets/svg/social/email.svg'
const ContactInfo = () => {
  return (
    <section className='contact__info'>
        <div  className='contact__info_divs'>
            <p className='contact__p p_description'>
            Si desea realizar alguna consulta 
        por favor no dude en contactarnos, su consulta no nos molesta</p>
        </div>
        <div className='contact__info_divs'>
            <img src={phoneCallIcon}className='icon-info'  alt='icon-phone'/>
            <p className='contact__p p_number'>+54 1234-567890</p>
        </div>
        <div className='contact__info_divs'>
            <img src={emailIcon} className='icon-info' alt='icon-email'/> 
            <p className='contact__p p_email'>any_restaurant@anyDomain.com</p>
        </div>
    </section>  
  )
}

export default ContactInfo
