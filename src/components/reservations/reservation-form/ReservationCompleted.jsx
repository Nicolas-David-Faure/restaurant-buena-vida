import React from 'react'
import '../../../assets/css/reservations/reservationCompleted.css'
import checkIcon from '../../../assets/svg/check.svg'
import { motion } from 'framer-motion'

const ReservationCompleted = ({ reserva }) => {
  return (
   <motion.section
    initial={{
      opacity:0.2
    }}
    animate={{
      opacity:1,
      transition:{
        duration:1,
        type:"spring"
      
      }}}
    className='Reservation__completed'>
        <motion.h4
        initial={{
          y:"-100px",
          opacity:0
          }}
        animate={{
          y:0,
          opacity:1,
          transition:{
            duration:1,
            type:"spring",
            bounce:0.5
          }
        }}
        >Completaste con exito tu reserva {reserva[0].name} te esperamos :)</motion.h4>
        <motion.button
          initial={{
            y:"100px",
            opacity:0
            }}
          animate={{
            y:0,
            opacity:1,
            transition:{
              duration:1,
              type:"spring",
              bounce:0.5
            }
          }}
         type='button'>Confirmar<img src={checkIcon} /></motion.button>
   </motion.section>
  )
}

export default ReservationCompleted
