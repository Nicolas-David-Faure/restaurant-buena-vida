import { useEffect, useState } from "react";
import "../../../assets/css/reservations/reservationPhaseTwo.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import arrowDown from '../../../assets/svg/arrow-down.svg'
import arrowUp from '../../../assets/svg/arrow-up.svg'
import ReservationDietaryRestriction from "./restriccionDietetica/ReservationDietaryRestriction.jsx";
import { motion } from "framer-motion";

const initialPhaseTwo = {opacity: 0, x:-100}
    const animationPhaseTwo ={
            opacity:1, 
            x:0, 
            transition:{
                duration:1,
                type:"spring",
                bounce: 0.5
                
            }}
const ReservationPhaseTwo =({ getsPhaseTwo , setsPhaseTwo })=> {
    const [hour , setHour] = useState('9');
    const [minutes , setMinutes] = useState('00');
    const [openNavHour, setOpenNavHour] = useState(false)
    const [openNavMinutes, setOpenNavMinutes] = useState(false)
    

    const handleChangeHour=(e)=>{
    const targetID = e.target.parentNode.id;
        
    switch(targetID){
        case "select_hour":
            
            return setHour(e.target.value)
        case "select_minutes":
             setMinutes(e.target.value == "0" ? "00" : e.target.value)
    }  
   
}
useEffect(()=>{
    setsPhaseTwo.setSelectedHour(hour + ":" + minutes);
},[handleChangeHour])

const sumPeople =()=>{
    if(getsPhaseTwo.numberOfPeople <= 7){
        return  setsPhaseTwo.setNumberOfPeople(getsPhaseTwo.numberOfPeople + 1);
    }
}
const restPeople =()=>{
    if(getsPhaseTwo.numberOfPeople > 1){
        return  setsPhaseTwo.setNumberOfPeople(getsPhaseTwo.numberOfPeople - 1);
    }
}

 
const openOptionsHour =()=>{
    return setOpenNavHour(!openNavHour)
}
const openOptionsMinutes=()=>{
    
    return setOpenNavMinutes(!openNavMinutes)
}

  return (
    <div className="reservationPhaseTwo">
        <motion.div
        whileHover={{scale:1.01}} 
         initial={initialPhaseTwo}
         animate={()=>{
            animationPhaseTwo.transition.delay = 0
            return animationPhaseTwo
        }}
         className="reservationPhaseTwo_num-of-people">  
            <p>Indique el numero de personas:</p>
            <p>{getsPhaseTwo.numberOfPeople}</p>
            <div className="reservationPhaseTwo_num-of-people_cont-btn">
                <button className="" type="button" onClick={restPeople}>-</button>
                <button className="" type="button" onClick={sumPeople}>+</button>
            </div>
        </motion.div>
         
        <motion.div
        whileHover={{scale:1.01}} 
        initial={initialPhaseTwo}
        animate={()=>{
            animationPhaseTwo.transition.delay=0.1
          return  animationPhaseTwo
        }
    } 
        className="reservationPhaseTwo_num_date">
            <p>Indique la fecha y hora que desea concurrir al restaurant</p>
            <div className="reservationPhaseTwo_num_date_date">
                <label className="reservation2__label">Fecha:</label> 
                <DatePicker
                    selected={getsPhaseTwo.selectedDate}
                    onChange={(date) => setsPhaseTwo.setSelectedDate(date)}
                    minDate={new Date()} // establece la fecha mínima en la fecha actual
                        />

                <label className="reservation2__label" htmlFor="input_hour">Hora:</label>
                <div className="reservationPhaseTwo_num_date_hour">
                    <nav onClick={openOptionsHour} className={openNavHour ? "nav_select_hour" : "nav_select_hour nav_select_hour-open"  } >
                        <span className="reservation2_nav_select-span"><img src={!openNavHour ? arrowDown :arrowUp}/>{hour}</span>      
                    <ul  name="select_hour" id="select_hour"
                        className={openNavHour ? "select_hour " : "select_hour select_hour_desactive"}
                        onClick={handleChangeHour}>              
                        <li value="9">9</li>
                        <li value="10">10</li>
                        <li value="11">11</li>
                        <li value="12">12</li>
                        <li value="13">13</li>
                        <li value="14">14</li>
                        <li value="15">15</li>
                        <li value="18">18</li>
                        <li value="19">19</li>
                        <li value="20">20</li>
                        <li value="21">21</li>
                        <li value="22">22</li>
                        <li value="23">23</li>
                    </ul>
                    </nav>
                    <p>:</p>
                    <nav onClick={openOptionsMinutes} className={openNavMinutes ? "nav_select_hour" : "nav_select_hour nav_select_hour-open"} >
                        <span className="reservation2_nav_select-span">{minutes} <img src={!openNavMinutes ? arrowDown :arrowUp}/></span>
                        <ul className={openNavMinutes ? "select_hour select_hour-minute" : "select_hour select_hour-minute  select_hour_desactive"} name="select_minute" id="select_minutes" onClick={handleChangeHour}>
                            <li value="00">00</li>
                            <li value="15">15</li>
                            <li value="30">30</li>
                            <li value="45">45</li>
                        </ul>
                    </nav>
                </div>
                   
            </div>
       </motion.div>
       <ReservationDietaryRestriction
        animationMotion={animationPhaseTwo}
        initialMotion={initialPhaseTwo}
        dietaryRestriction={getsPhaseTwo.dietaryRestriction} 
        setDietaryRestriction={setsPhaseTwo.setDietaryRestriction} />
    </div>
  )
}

export default ReservationPhaseTwo
