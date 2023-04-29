import { useEffect, useState } from 'react'
import '../assets/css/menu.css'
import menuIcon from "../assets/svg/bx-menu.svg"
import xIcon from "../assets/svg/x.svg"
const MenuDesplegable =()=>{
    const [switchMenu, setSwitchMenu] = useState(true)
    const [sinAnimacionCounter, setSinAnimacionCounter] = useState(0)
    
    const classNavAnimation = switchMenu ? 'menu__nav' : 'menu__nav menu__nav-active';
    

    const handleSwitch =() =>{
        setSinAnimacionCounter(prev=> prev + 1)
        setSwitchMenu(!switchMenu)
        if(sinAnimacionCounter > 2){
            setSinAnimacionCounter(1)
        }
    }

    return(
        <div className="menu">
            <span onClick={()=>handleSwitch()} className='menu__span'>
                <img className='menu__span__img' src={switchMenu ? menuIcon : xIcon} alt="menu"/>
            </span>
            <nav className={`${classNavAnimation}  ${sinAnimacionCounter >= 1 ? 'menu__nav_desactive' : ''}`}>
                <ul className='menu__ul'>
                    <li className='menu__li'><a className='menu__a'>Home</a></li>
                    <li className='menu__li'><a className='menu__a'>Menu</a></li>
                    <li className='menu__li'><a className='menu__a'>Reservas</a></li>
                    <li className='menu__li'><a className='menu__a'>Sobre Nosotros</a></li>
                    <li className='menu__li'><a className='menu__a'>Contacto</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuDesplegable