import React, { useEffect, useState } from 'react'
import "./ReservationDietaryRestriction.css"
import { motion } from 'framer-motion'
const controlText = {
    remove: {    
            x: "-200%",
            transition:{
                duration: 1,
                type:"spring",
                delay:0
            }
        },
    put:{
            x: "0",
            transition:{
                duration: 1,
                type:"spring",
              
            }
         },
         remove_p:{
            x: "200%",
            transition:{
                duration: 1,
                type:"spring",
                delay:0
            }
         }
    }
const showInput = {
    show:{
        y:'0%',
        opacity: 1,
    transition:{
        duration:1,
        type:"spring",

    }
    },
    hide:{
        y:'150%',
        opacity:0,
        transition:{
        duration:1,
        type:"spring",

    }
    }
}
const ReservationDietaryRestriction = ( { animationMotion , initialMotion , setDietaryRestriction , dietaryRestriction } ) => {
    const [activeOptions, setActiveOpitons] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [items, setItems] = useState([]);
    
    const handleChangeOptions =(e)=>{ 
        const idInput = e.target.value;
       
        if(idInput == "false"){
            setItems([])
            setActiveOpitons(false)
             console.log(activeOptions)
        }else{
            setActiveOpitons(true)
            console.log(activeOptions)
        }
       
    }
    const addDietaryRestriction =()=>{
        if(inputValue != ""){
            setItems([...items, inputValue])
            setDietaryRestriction(items)
            setInputValue('')
        }
    }

  
    

    useEffect(()=>{
        
        setDietaryRestriction(items)
    },[addDietaryRestriction])

    const handleInputValue =(e)=>{
        setInputValue(e.target.value)
    }
  

    console.log(activeOptions)
    
  return (
    <motion.section
    layout
        whileHover={{scale:1.03}} 
        initial={initialMotion}
        animate={()=>{
            animationMotion.transition.delay = 0.2
            return animationMotion
        } } 
    className='ReservationDietaryRestriction__main'>
        <motion.div
        
        className='ReservationDietaryRestriction__cont_description'>
            <motion.h4
            className='ReservationDietaryRestriction__cont_description-h4'
            animate={activeOptions ? "remove" : "put"}
            variants={controlText}
            >¿Usted o  alguno de sus invitados tiene alguna restricción dietetica?</motion.h4>
            <motion.p
            className='ReservationDietaryRestriction__cont_description-p'
            animate={activeOptions ? "remove_p" : "put"}
            variants={controlText}
            >Como alergias a ciertos alimentos o preferencias vegetarianas</motion.p>
            <div className='ReservationDietaryRestriction__cont_inputs'>
                
                    <label 
                    className='ReservationDietaryRestriction_label'
                    htmlFor="has-dietetyc-restriction">    
                       <p className='label_p_yes'>Sí</p> 
                       <input 
                        name='dietetyc-restriction'
                        id='has-dietetyc-restriction'
                        type="radio" 
                        value={true}
                        onClick={handleChangeOptions}
                    /></label>
            
                    <label
                    className='ReservationDietaryRestriction_label'
                    htmlFor="hasNot-dietetyc-restriction">
                        <input 
                        name='dietetyc-restriction'
                        id='hasNot-dietetyc-restriction' 
                        type="radio" 
                        value={false}           
                        onClick={handleChangeOptions}
                        />
                        <p className='label_p_no'>No</p>
                    </label>
                    
               
            </div>
        </motion.div>
        <motion.div
        layout
        
        animate={activeOptions ? "show" : "hide"}
        variants={showInput} 
        className='ReservationDietaryRestriction__cont-hasRestioction'>
            <div className='ReservationDietaryRestriction__hasRestioction_cont-input'>
                <input
                className='ReservationDietaryRestriction__hasRestioction_input'
                placeholder='Ej: Maní' 
                type="text" value={inputValue} 
                onChange={handleInputValue} 
                id='input_addDietaryRest' />
                <ul>
                    {dietaryRestriction.length >= 1 && activeOptions ? 
                        dietaryRestriction.map((items, index)=>{
                        
                            return <motion.li
                            layoutId={`list_element-${index}`}
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity:1, y:0,transition:{
                                duration:1,
                                type:"spring",
                                bounce:.5
                            }}}
                            id={`list_element-${index}`} 
                            key={index}>
                                    <span>•</span>{items}
                                </motion.li> }): ""}                          
                </ul>
            </div>
                <motion.button
                initial={{backgroundColor:"#7b321e"}}
                whileHover={{backgroundColor:"#C82C2C"}}
                animate={activeOptions ? {opacity:1}: {opacity:0,transition:{
                    duration:0.3
                }}}
                type='button' 
                onClick={addDietaryRestriction}>Añadir</motion.button>
        </motion.div>
    </motion.section>
  )
}

export default ReservationDietaryRestriction
