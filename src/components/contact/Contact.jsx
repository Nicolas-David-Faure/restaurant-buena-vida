import React from 'react'
import '../../assets/css/contact/contact.css'
//components
import ContactInfo from './contact-childs/ContactInfo'
import ContactSocial from './contact-childs/ContactSocial'
const Contact = () => {
  return (
    <section className='Contact'>
        <div className='contact__cont_title'>
            <h2 className='contact__title'>Contacto</h2>
        </div>
        <ContactInfo  />
        <ContactSocial /> 
    </section>
  )
}

export default Contact
