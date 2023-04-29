import React, { useEffect, useState } from 'react'
import '../../../assets/css/reservations/reservationPhaseThree.css'
import { motion } from 'framer-motion'

const ReservationPhaseThree = () => {
  const [paymet, setPayment] = useState(false)

  const confirmReservation =()=>{
    let btnValue = event.target.value
    switch(btnValue){
      case "false":
        btnValue = false;
         return setPayment(btnValue)
      case "true":
        btnValue = true;
        return setPayment(btnValue)
        default: 
        return false;
    }
  }

 
  return (
    <section className='ReservationPhaseThree'>
        <div className='ReservationPhaseThree__payment'>
            <div className='ReservationPhaseThree__payment-texts-cont'>
                <h3 >Estas a un paso de completar tu reserva</h3>
                <p>Para concluir con la reserva es necesario realizar una seña al restaurante. El monto será reintegrado a la hora de pagar tu comida</p>
                
            </div>
            <motion.span
           
            initial={{display: "none"}}
            animate={paymet ? {display: "flex"} : {display: "none"}}
            className='ReservationPhaseThree__confirm-payment'>
              <h3>¿Estas seguro de que quieres realizar este pago?</h3>
              <motion.button
              whileHover={{
                backgroundColor:"rgb(74, 184, 100)",
                scale:1.02
              }}  
              type='submit'>
                Si, confirmar pago
                </motion.button>
              <motion.button
              whileHover={{
                backgroundColor:"rgb(160, 57, 57)",
                scale:1.02
            }} 
              type='button' 
              value={false} 
              onClick={()=>confirmReservation()}>
                No, volver atras
                </motion.button>
            </motion.span>
            <button value={true} onClick={()=>confirmReservation()} type='button'>Pagar $10</button>
        </div>
    </section>
  )
}

export default ReservationPhaseThree
