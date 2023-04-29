import { useEffect, useState } from 'react';
import '../../assets/css/FoodMenu/Details/details.css'
import { motion } from 'framer-motion'
const DetailsFood =( {name , price, salsa, ingredientes , src} )=>{
   const divBackground = {
    backgroundImage : "url("+src+")"
   }



   
   
    return (
        <motion.div
                whileHover={{scale:1.01}}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                style={divBackground}
                className='details__cont'> 
            <div className='details__cont-2'>
            <h2  className='details__name'>{name}</h2>
                <div className='details__cont-p'>
                    <p >Salsas: <span>{salsa}</span></p>
                    <p >Ingredientes: <span>{ingredientes}</span></p>
                    <div className='details__cont-price'>
                        <h3 className='details__price'>{price}</h3>
                    </div>
                    
                </div>
                
            </div>
           
          
        </motion.div>
            
        
    )
}

export default DetailsFood