import "../assets/css/FoodMenu/foodMenu.css"
import foodMenuIcon from '../assets/svg/food-menu.svg'

import MenuSections from "./foodMenu-componentes/MenuSections.jsx"
import FoodCategory from "./foodMenu-componentes/FoodCategory.jsx"
import DrinkCategory from "./foodMenu-componentes/DrinkCategory.jsx"
import { useState  } from "react"


const FoodMenu =()=>{
    const [showCategory ,setShowCategory] = useState("");
    
   
    
    //Si el evento es llamado y el id de algun componente coincide con el string del if/else 
    //Setea el componente A o B
    //Este componente pasa un prop con una funcion para volver atras
   const handleClick=(e)=>{
    const targetID = e.target.id;
  
    if(targetID == "menu_food"){
      setShowCategory(<FoodCategory  comeBack={comeBack} />)
    }else if(targetID == "menu_drinks"){
        setShowCategory(<DrinkCategory   comeBack={comeBack} />)
    }
   }
    const comeBack=()=>{
        //console.log()
        setShowCategory("")
    }
    return(
        <div className="foodMenu">
            <div className="foodMenu__cont_title">   
              <h2 id="foodMenu__title" className="foodMenu__title"> Menu </h2>
             
            </div>
            <section
                onClick={handleClick}
                id="foodMenu__cont_sections" 
                className="foodMenu__cont_sections">
                    {handleClick ? showCategory : "" }  
                    {showCategory == "" ?  <MenuSections id={'menu_food'} title="Food" /> : "" }
                    {showCategory == "" ?  <MenuSections id={'menu_drinks'} title="Drinks" /> : "" }
             </section>
        </div>
    )
}

export default FoodMenu