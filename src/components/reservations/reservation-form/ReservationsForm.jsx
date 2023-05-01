import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import '../../../assets/css/reservations/reservation-form.css'
import ReservationPhaseOne from './ReservationPhaseOne.jsx';
import ReservationPhaseTwo from './ReservationPhaseTwo.jsx';
import ReservationPhaseThree from './ReservationPhaseThree.jsx';
import ReservationCompleted from './ReservationCompleted.jsx';
const ReservationsForm = () => {

  const [counterPhase, setCounterPhase] = useState(0);
  const [reservationCompleted, setReservationCompleted] = useState()

  /*USE STATES phase 1*/ 
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [DNI, setDNI] = useState("");
  const [email, setEmail] = useState("");

  const setsPhaseOne = {
    setName: setName,
    setLastName: setLastName,
    setPhoneNumber: setPhoneNumber,
    setDNI: setDNI,
    setEmail:setEmail
  }
  const getsPhaseOne = {
    name: name,
    lastName: lastName,
    phoneNumber: phoneNumber,
    DNI:DNI,
    email:email
  }
  //STATES PHASE 2
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [dietaryRestriction, setDietaryRestriction] = useState([])
  //const [] = useState()

  const setsPhaseTwo = {
    setNumberOfPeople:setNumberOfPeople,
    setSelectedDate:setSelectedDate,
    setSelectedHour:setSelectedHour,
    setDietaryRestriction:setDietaryRestriction
  }

  const getsPhaseTwo = {
    numberOfPeople:numberOfPeople,
    selectedDate:selectedDate,
    selectedHour:selectedHour,
    dietaryRestriction:dietaryRestriction
  }




  
  //PUSH TO RESERVATION
   const createReservation =(e)=>{
    e.preventDefault()
      sumCounter()
      
      if(counterPhase == 2){//cuando el contador llegue a 2 la informacion de la reserva hace push en el array reservas
        const reservation = new Object();
   
      reservation.name = name;
      reservation.lastName = lastName;
      reservation.phoneNumber = phoneNumber;
      reservation.numberOfPeople = numberOfPeople;
      reservation.dni = DNI;
      reservation.email = email;
      reservation.hour = selectedHour;
      reservation.date = selectedDate;
      reservation.dietaryRestriction = dietaryRestriction;
      console.log(reservation)
      setReservationCompleted([reservation])
      
      
      }
     }
    
     const restCounter = ()=>{
      return setCounterPhase(counterPhase - 1)
     }
     const sumCounter =()=>{ 
      return setCounterPhase(counterPhase + 1)
     }
     console.log(counterPhase)


    const showComponents =(counter)=>{
      switch(counter){
        case 0:
          return <ReservationPhaseOne
          setsPhaseOne={setsPhaseOne}
          getsPhaseOne={getsPhaseOne} />
        case 1:
         return <ReservationPhaseTwo
          getsPhaseTwo={getsPhaseTwo} 
          setsPhaseTwo={setsPhaseTwo} />
        case 2: 
          return <ReservationPhaseThree />
          case 3:
            return <ReservationCompleted reserva={reservationCompleted} />
          default:
            break
        }
      
    }
 
  return (
    <form onSubmit={createReservation} className='reservation-form'>
      <div className='reservation-form_cont'>
        {
          showComponents(counterPhase)
      }
        
        <div className={counterPhase > 0 ? 'reservation__cont-btn btn-space-around' : 'reservation__cont-btn'}>
          {counterPhase > 0 ? 
          <motion.button 
            type={'button'}
            onClick={restCounter}
            layout
            initial={{
              x:-50,
              y:50,
              opacity:0
            }}
            animate={{
              x:0,
              y:0,
              opacity:1,
              transition:{
                duration: 0.5,
                type:"spring",
                bounce:0.5
              }}}
            whileHover={{scale:1.03}}
           >Atras</motion.button> : ""}
          {counterPhase < 2 ?
            <motion.button
            layout
            initial={{
              x:-50,
              y:50,
              opacity:0
            }}
            animate={{
              x:0,
              y:0,
              opacity:1,
              transition:{
                duration: 0.5,
                type:"spring",
                bounce:0.5
              }}}
            whileHover={{scale:1.03}} 
            type= 'submit' 
          >Siguiente</motion.button> : ""}
        </div>
     </div>
 
</form>
  )
}

export default ReservationsForm
