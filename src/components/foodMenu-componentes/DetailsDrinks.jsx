import { motion } from 'framer-motion'

const DetailsDrinks =( { uva , name , descripcion , ano , precio , title, srcImg} )=>{
    const backgroundImage = {backgroundImage : `url(${srcImg})`}

    return(
        <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
        style={backgroundImage} className='details__cont'> 
            <div className='details__cont-2'>
            <h2  className='details__name'>{name}</h2>
                <div className='details__cont-p'>
                {title == "Vinos" ? <p >Año: <span>{ano}</span></p> : ""}  
                 {title == "Vinos" ? <p >Uva: <span>{uva}</span></p> : ""}  
                    <p >Descripcion: <span>{descripcion}</span></p>
                    <div className='details__cont-price'>
                        <h3 className='details__price'>{precio}</h3>
                    </div>
                    
                </div>
                
            </div>
           
          
        </motion.div>
    )
}

export default DetailsDrinks