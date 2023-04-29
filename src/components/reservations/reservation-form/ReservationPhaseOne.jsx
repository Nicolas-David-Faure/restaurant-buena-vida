import React from 'react';
import { motion } from 'framer-motion'
const idInputs = {
    name:"reservation-name", 
    lastName:"reservation-lastName",
    phoneNumber:"reservation-numberPhone",
    dni:"reservation-DNI",
    email:"reservation-email"
  };
const ReservationPhaseOne=( { setsPhaseOne , getsPhaseOne } )=>{
  const formFields = [
    {label: "reservation-name",labelValue:"Nombre:",
     type:"text", id:"reservation-name",value: getsPhaseOne.name},
    {label: "reservation-lastName",labelValue:"Apellido:",
     type:"text",id:"reservation-lastName",value: getsPhaseOne.lastName},
    {label: "reservation-DNI",labelValue:"DNI:",
     type:"number",id:"reservation-DNI",value: getsPhaseOne.DNI},
    {label: "reservation-email",labelValue:"E-Mail:",
     type:"email",id:"reservation-email",value: getsPhaseOne.email},
    {label: "reservation-numberPhone",labelValue:"Numero De Celular:",
     type:"number",id:"reservation-numberPhone",value: getsPhaseOne.phoneNumber},
  ] 

    const variants = {
      visible: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.1
        }
      }),
      hidden: {
        y: -50,
        opacity: 0
      }
    };
    const handleChange =(e)=>{
        // if the ID of any input match , save it in their states 
       
        switch(e.target.id){
          case idInputs.name: 
            return setsPhaseOne.setName(e.target.value)
            break;
          case idInputs.lastName:
            return setsPhaseOne.setLastName(e.target.value);
            break;
          case idInputs.dni:
            return setsPhaseOne.setDNI(e.target.value)
            break;
          case idInputs.phoneNumber:
            return setsPhaseOne.setPhoneNumber(e.target.value)
            break;
            case idInputs.email:
              return setsPhaseOne.setEmail(e.target.value)
          default:
            
            break;
          }
        }
  return (
    <div>
      {
        formFields.map((e, index )=>{
         return <motion.div 
                  key={index}
                  variants={variants}
                  custom={index}
                  initial="hidden"
                  animate="visible" 
                  className={`reservation__cont_label-input reservation__cont_label-input-${index}`}>
                <label htmlFor={e.label}>{e.labelValue}</label>
                <motion.input
                className='reservation-form_input' 
                id={e.id} 
                value={e.value}
                initial={{backgroundColor:"#282222"}}
                whileFocus={{backgroundColor:"#423737"}}  
                  onChange={handleChange} type={e.type} required/>
          </motion.div>
        })
      }
      
    
      
    </div>
  )
}

export default ReservationPhaseOne
