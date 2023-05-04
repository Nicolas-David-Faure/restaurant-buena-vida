import React from 'react'
//css
import '../../../assets/css/contact/ContactSocial.css'
//icons
import facebook from '../../../assets/svg/social/facebook.svg'
import instagram from '../../../assets/svg/social/instagram.svg'
import whatsApp from '../../../assets/svg/social/whatsApp.svg'
const ContactSocial = () => {
  return (
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
  )
}

export default ContactSocial
