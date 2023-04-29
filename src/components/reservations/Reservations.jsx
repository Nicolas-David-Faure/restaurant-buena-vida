
import '../../assets/css/reservations/reservations.css'
import ReservationsForm from './reservation-form/ReservationsForm'
import ConfirmReservation from './ConfirmReservation'
import { useState } from 'react'
// aqui puedes reservar la mesa con la cantidad de personas que desee, la fecha y si esta disponible o no y el tiempo que lleva el cliente en la mesa.
const Reservations=()=> {

    const [continueReservation, setContinueReservation] = useState(false)

    const closeMessage =()=>{
      setContinueReservation(true)
    }


    return (
      <section className='reservation__main'>

        <div className='reservation__cont_title' >
            <h1 className='reservation__title'>Reservas</h1>
        </div>
       {//Si da click en continuar el estado de continueReservation cambia a true y puede continuar con la reservacion
       continueReservation ? <ReservationsForm /> :
        <ConfirmReservation continueReservation={closeMessage}/>
       } 
       
      </section>
    )
 }

export default Reservations
