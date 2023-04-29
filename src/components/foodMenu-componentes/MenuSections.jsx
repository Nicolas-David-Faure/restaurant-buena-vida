import '../../assets/css/FoodMenu/menuSections.css'
import { motion } from 'framer-motion'
const MenuSections =({ title , id })=>{
return(
    <motion.section 
    layout
    whileHover={{ 
        scale: 1.01,
        transition:{
            duration:0.01,
            type:"spring"
            
        }
    }}
    whileTap={{
        scale: 1,
        transition:{
            duration:0.1,
            type:"spring"
            
        } }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    
    id={id} className="MenuSectios">
        <div id={id} className='menuSections__cont'>
            <div id={id} className='menuSections__cont_title'>
                <h2 id={id}>{title}</h2>
            </div>
       </div>
    </motion.section>
)
}

export default MenuSections