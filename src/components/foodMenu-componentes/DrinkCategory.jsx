import { useState } from 'react'
import '../../assets/css/FoodMenu/menuCategory.css'
import leftArrow from '../../assets/svg/left-arrow.svg'
import { motion } from 'framer-motion'
import MenuDetailsDrinks from './MenuDetailsDrinks'
const DrinkCategory =({ comeBack })=>{
    const [displayDrinks, setDisplayDrinks ] = useState("")
    const [indexDrink, setIndexDrink] = useState(0)
    const enterList =(e)=>{
        let targetID = e.target.innerText
        switch(targetID){
            case "Vinos":
                setDisplayDrinks("Vinos")
                setIndexDrink(0)
            break
            case "Cervezas":
                setDisplayDrinks("Cervezas")
                setIndexDrink(1)
                break   
            case "Tragos":
                setDisplayDrinks("Tragos")
                setIndexDrink(2)
            break
            case "Gaseosas":
                setDisplayDrinks("Gaseosas")
                setIndexDrink(3)
            break
            default: 
                break
        }

      
    }
   


    const backDrinkLists =()=>{
        setDisplayDrinks("")
    }
    return(
        <div className='cont_category'>
            {!displayDrinks == "" ? <MenuDetailsDrinks title={displayDrinks} indexDrink={indexDrink} /> : "" }
            {displayDrinks == "" ?
            <motion.ul
            initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            onClick={enterList} className='category__ul'>
                    <li className='category__li li__vinos'>
                        <div className='category__div'>Vinos</div>
                    </li>
                    <li className='category__li li__cervezas'>
                        <div className='category__div'>Cervezas</div>
                    </li>
                    <li className='category__li li__tragos'>
                        <div className='category__div'>Tragos</div>
                    </li>
                    <li className='category__li li__gaseosas'>
                        <div className='category__div'>Gaseosas</div>
                    </li>
            </motion.ul> 
            : ""}
            <button onClick={displayDrinks == "" ? comeBack : backDrinkLists} className="category_btn_back">
                <h3>Volver atras</h3>
            </button>
        </div>
    )
}

export default DrinkCategory