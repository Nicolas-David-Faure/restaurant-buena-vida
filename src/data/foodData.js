//pastas
import lasagnaCarne from '../assets/imagenes/pastas/lasagna-carne.jpg'
import lasagnaVerdura from '../assets/imagenes/pastas/lasagna-verdura.jpg'
import spaguetti from '../assets/imagenes/pastas/spaguetti.jpg'
import capeletini from '../assets/imagenes/pastas/capeletini.jpg'
import noquis from '../assets/imagenes/pastas/noquis.jpg'
//carnes
import bife from '../assets/imagenes/carnes/bife.jpg'
import asado from '../assets/imagenes/carnes/asado.jpg'
import cordero from '../assets/imagenes/carnes/cordero.jpg'
import chivo from '../assets/imagenes/carnes/chivo.jpg'
import cerdo from '../assets/imagenes/carnes/cerdo.jpg'
//pizzas
import napolitana from '../assets/imagenes/pizzas/napolitana.jpg'
import fugazzeta from '../assets/imagenes/pizzas/pizza-fugazzeta.jpg'
import cuatroQuesos from '../assets/imagenes/pizzas/cuatro-quesos.jpg'
import calabresa from '../assets/imagenes/pizzas/calabresa.jpg'
import aCaballo from '../assets/imagenes/pizzas/pizza-a-caballo.jpg'
//sanguches
import burguer from '../assets/imagenes/sanguches/burguer.jpg'
import lomito from '../assets/imagenes/sanguches/lomito.jpg'
import sandwichDeBondiola from '../assets/imagenes/sanguches/sandwich-de-bondiola.jpg'
import sandwichDeMilanesa from '../assets/imagenes/sanguches/Sandwich-de-Milanesa.jpg'
import choripan from '../assets/imagenes/sanguches/choripan.jpg'
//postres
import torta from '../assets/imagenes/postres/torta-chocolate.jpg'
import flan from '../assets/imagenes/postres/flan-light.jpg'
import tartaOreo from '../assets/imagenes/postres/tarta_de_oreo.jpg'
import helado from '../assets/imagenes/postres/helado.jpg'
import cheesecake from '../assets/imagenes/postres/cheesecake.jpg'


const pastas = [
             {name : "Lasagna de carne",
             precio: "$200", salsas: 'Boloñesa / Blanca',
             ingredientes: "Carne, queso, cebolla, jamon, huevo, morron" ,
             img: lasagnaCarne
             },
            {name : "Lasagna de verduras",
            precio: "$30", salsas: 'Boloñesa / Blanca',
            ingredientes: "Espinaca, queso, cebolla, acelga,tomate, huevo, morron" ,
            img: lasagnaVerdura
                },
            {name : "Spaguetti",
            precio: "$20", salsas: 'Boloñesa / Blanca',
            ingredientes: "queso",
            img:spaguetti
                },
            {name : "Capeletini",
            precio: "$35", salsas: 'Boloñesa / Blanca',
            ingredientes: " jamon, huevo, morron, queso" ,
            img: capeletini
            
                },
            {name : "Ñoquis",
            precio: "$35", salsas: 'Boloñesa / Blanca',
            ingredientes: "papa, carne " ,
            img: noquis
         }]
  
 const carnes =[
                {name : "Bife",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                 ingredientes: "Carne, queso, cebolla, jamon, huevo, morron",
                 img: bife
                 },
                {name : "Asado",
                precio: "$30", salsas: 'Boloñesa / Blanca',
                ingredientes: "spinaca, queso, cebolla, acelga,tomate, huevo, morron",
                img:  asado
                    },
                {name : "Cordero",
                precio: "$20", salsas: 'Boloñesa / Blanca',
                ingredientes: "queso",
                img: cordero
                    },
                {name : "chivo",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                ingredientes: " jamon, huevo, morron, queso",
                img: chivo
                    },
                {name : "cerdo",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                ingredientes: "papa, carne ",
                img: cerdo
             }];
          
const pizzas =[
                  {name : "Napolitana",
                 precio: "$35", salsas: 'Boloñesa / Blanca',
                 ingredientes: "Carne, queso, cebolla, jamon, huevo, morron" ,
                 img: napolitana
                 },
                {name : "Fugazzeta",
                precio: "$30", salsas: 'Boloñesa / Blanca',
                ingredientes: "spinaca, queso, cebolla, acelga,tomate, huevo, morron" ,
                img:  fugazzeta
                    },
                {name : "Cuatro Quesos",
                precio: "$20", salsas: 'Boloñesa / Blanca',
                ingredientes: "queso" ,
                img:  cuatroQuesos
                    },
                {name : "Calabresa",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                ingredientes: " jamon, huevo, morron, queso" ,
                img:  calabresa
                    },
                {name : "A Caballo",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                ingredientes: "papa, carne " ,
                img:  aCaballo
             }];
      
const sanguches=[
                {name : "Hamburguesa Comun / Especial",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                 ingredientes: "Carne, queso, cebolla, jamon, huevo, morron" ,
                 img: burguer
                 },
                {name : "Lomito Con Papas",
                precio: "$30", salsas: 'Boloñesa / Blanca',
                ingredientes: "spinaca, queso, cebolla, acelga,tomate, huevo, morron" ,
                img:  lomito
                    },
                {name : "Sanguche de Bondiola",
                precio: "$20", salsas: 'Boloñesa / Blanca',
                ingredientes: "queso" ,
                img:  sandwichDeBondiola
                    },
                {name : "Sanguche De Milanesa",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                ingredientes: " jamon, huevo, morron, queso" ,
                img:  sandwichDeMilanesa
                    },
                {name : "Choripan",
                precio: "$35", salsas: 'Boloñesa / Blanca',
                ingredientes: "papa, carne " ,
                img:  choripan
             }];
       
const postres = [ 
                {name : "Torta",
                precio: "$35", salsas: '...',
                 ingredientes: "..." ,
                 img:   torta
                 },
                {name : "Flan",
                precio: "$30", salsas: '...',
                ingredientes: "..." ,
                img:  flan
                    },
                {name : "Tarta Oreo",
                precio: "$20", salsas: '...',
                ingredientes: "..." ,
                img:  tartaOreo
                    },
                {name : "Helado",
                precio: "$35", salsas: '...',
                ingredientes: "..." ,
                img:  helado
                    },
                {name : "Chease Cake",
                precio: "$35", salsas: '...',
                ingredientes: "..." ,
                img:  cheesecake
             }];
        

    const comidaSelect =[
        {tipo : pastas},
        {tipo : carnes},
        {tipo : pizzas},
        {tipo : sanguches},
        {tipo : postres},
        
    
    ]



    export default comidaSelect