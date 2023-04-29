import '../../assets/css/FoodMenu/Details/details.css'
import bebidasSelect from '../../data/drinkData.js'
import DetailsDrinks from './DetailsDrinks';
const MenuDetailsDrinks =({ title, indexDrink })=>{
    const drinksArray = bebidasSelect[indexDrink].tipo;

    return(
        <div>
        <h1 className="menu-details__h1">{title}</h1>
        <ul className="menu-details__ul">
            {drinksArray.map((drink, index)=>{
              return(  <DetailsDrinks 
                title={title}
                uva={drink.uva}
                name={drink.name}
                descripcion={drink.descripcion}
                ano={drink.ano} 
                precio={drink.precio}
                srcImg={drink.img}
                key={drink.name}  />
            ) 
            })}
            
        </ul>
    </div>
    )
}
export default MenuDetailsDrinks