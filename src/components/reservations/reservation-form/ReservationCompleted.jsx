import React from 'react'
import '../../../assets/css/reservations/reservationCompleted.css'
import checkIcon from '../../../assets/svg/check.svg'
const ReservationCompleted = ({ reserva }) => {
  return (
   <section className='Reservation__completed'>
        <h4>Completaste con exito tu reserva {reserva[0].name} te esperamos :)</h4>
        <button type='button'><img src={checkIcon} /></button>
   </section>
  )
}

export default ReservationCompleted
