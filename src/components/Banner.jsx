import '../assets/css/banner.css'
import bowlIcon from '../assets/svg/bxs-bowl-rice.svg'
import logoPNG from '../assets/imagenes/logo-2.png'
const Banner =()=>{
 return( 
    <div className="banner__cont">
       <div className='banner__cont_2'>
        <div className='banner__cont_title'> 
            <img  className="banner__icon"  src={logoPNG}></img>
            <div className='banner__cont_title_2'>
                 <h1 className='banner__title'>Restaurant</h1>
                 <h1 className='banner__title'>Buena Vida</h1>
                 <p className='banner__slogan'>El sabor de la felicidad en cada bocado</p>
            </div>
           
        </div>
       </div>
        
    </div>
 )   
}


export default Banner;