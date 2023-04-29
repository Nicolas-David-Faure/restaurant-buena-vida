import "../../assets/css/reservations/confirm-reservation.css"
import { motion } from "framer-motion"
const ConfirmReservation = ({ continueReservation }) => {
const widthWindow = window.screen.width

  const cardVariants = {
    offscreen: {
      y: widthWindow > 563 ? 100 : 0,
      rotate: widthWindow < 564 ? 360: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        
      }
    }
  };
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
      className="confirmReservation">
      <div className="confirmReservation2">
        <div className="confirmReservation__cont_p">
          <p className="confirmReservation__p">Para realizar una reserva es necesario que usted brinde algunos datos personales</p>
          <p className="confirmReservation__p">Si está de acuerdo con estos terminos presione continuar</p> 
        </div>
        <motion.button
        whileHover={{
          scale:1.02,
          backgroundColor:"#db6701"
        }}
        className="confirmReservation_btn" 
        onClick={continueReservation}>Continuar</motion.button>
      </div>  
    </motion.div>
  )
}

export default ConfirmReservation
