import { useEffect, useState } from "react"
import comidaSelect from "../../data/foodData.js"
import DetailsFood from "./DetailsFood.jsx";
import '../../assets/css/FoodMenu/Details/details.css'
const MenuDetailsFood =({ name , indexType , activeList })=>{
    let objetos = [];
  

    let typeOfFood = comidaSelect[indexType].tipo;
  
    typeOfFood.forEach(e=>{
      objetos.push(e)
     })
 
    return(
        <div>
            <h1 className="menu-details__h1">{name}</h1>
            <ul className="menu-details__ul">
                
            {activeList ? objetos.map((comida, index)=>{
               
                return(
                 <DetailsFood
                     key={comida.name} 
                     name={comida.name}
                     salsa={comida.salsas}
                     ingredientes={comida.ingredientes}
                     price={comida.precio}
                     src={comida.img}
                     />
                    
                )
            }) : ""}

                
            </ul>
        </div>
    )
}

export default MenuDetailsFood