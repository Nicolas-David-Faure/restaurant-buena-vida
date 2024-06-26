//vinos

import achavalFerrer from "../assets/imagenes/drinks/vinos/achaval-ferrer.jpg";
import catenaZapata from "../assets/imagenes/drinks/vinos/CatenaZapata.png";
import luigiBosca from "../assets/imagenes/drinks/vinos/luigi-bosca.png";
import trivento from "../assets/imagenes/drinks/vinos/Trivento-Malbec-Golden-Reserve.jpg";
import bianchi from "../assets/imagenes/drinks/vinos/bianchi-particular.jpg";

//cervezas
import andes from "../assets/imagenes/drinks/cervezas/Cerveza-Andes-1-L.jpg";
import brahma from "../assets/imagenes/drinks/cervezas/brahma.jpg";
import isenbeck from "../assets/imagenes/drinks/cervezas/isenbeck.jpg";
import quilmes from "../assets/imagenes/drinks/cervezas/quilmes.jpg";
import stellaArtois from "../assets/imagenes/drinks/cervezas/stella-artois.jpg";

//tragos
import caipirinha from "../assets/imagenes/drinks/tragos/caipirinha.jpg";
import daikiri from "../assets/imagenes/drinks/tragos/daikiri.jpg";
import fernetCoca from "../assets/imagenes/drinks/tragos/fernet-coca.jpg";
import ginTonic from "../assets/imagenes/drinks/tragos/gin-tonic.jpg";
import whisky from "../assets/imagenes/drinks/tragos/whisky.jpg";

//gaseosas
import cocaCola from "../assets/imagenes/drinks/gaseosas/coca-cola-dolby.jpg";
import fanta from "../assets/imagenes/drinks/gaseosas/fanta.jpg";
import pasoDeLosToros from "../assets/imagenes/drinks/gaseosas/paso-de-los-toros.jpeg";
import pepsi from "../assets/imagenes/drinks/gaseosas/pepsi.jpg";
import sprite from "../assets/imagenes/drinks/gaseosas/sprite.jpg";

const vinos = [
  {
    uva: "Malbec",
    name: "Catena Zapata",
    descripcion:
      "Uno de los vinos Malbec más reconocidos a nivel mundial, es un vino tinto de cuerpo completo con notas de frutas oscuras, especias y un final largo.",
    precio: "$187",
    ano: "2020",
    img: catenaZapata,
  },
  {
    uva: "Malbec",
    name: "Achaval Ferrer",
    descripcion:
      "Este vino tinto es elaborado con uvas de viñedos de altura, lo que le otorga un sabor intenso y complejo con notas de frutas negras, vainilla y chocolate.",
    precio: "$10",
    ano: "2021",
    img: achavalFerrer,
  },
  {
    uva: "Malbec",
    name: "Luigi Bosca",
    descripcion: "Es un vino de cuerpo completo con un sabor intenso a frutas oscuras, como moras y ciruelas, y notas de especias y chocolate.",
    precio: "$110",
    ano: "2022",
    img: luigiBosca,
  },
  {
    uva: "Cabernet Sauvignon",
    name: "Trivento Reserve",
    descripcion:
      "Impecable relación precio-calidad en un Cabernet con todos los atributos clásicos de la variedad y que cuenta con una justa crianza de 6 meses en barricas de roble, lo que lo convierte en esa copa de vino cotidiana que levanta cualquier almuerzo o cena.",
    precio: "$1254",
    ano: "2019",
    img: trivento,
  },
  {
    uva: "Cabernet Sauvignon",
    name: "Bianchi Particular",
    descripcion:
      "Clásico de clásicos que nos recuerda lo buenos que son los Cabernet de San Rafael (Mendoza). De carácter mineral, sus aromas combinan la pimienta, el morrón y la fruta negra. Un gran vino de guarda y que añada tras añada va sumando frescura.",
    precio: "$5000",
    ano: "2019",
    img: bianchi,
  },
];
const cervezas = [
  {
    name: "Quilmes",
    descripcion: "Es una cerveza lager suave y refrescante que se disfruta en todo el país.",
    precio: "$20",
    img: quilmes,
  },
  {
    name: "Brahma",
    descripcion: "Brahma se caracteriza por su sabor suave y equilibrado.",
    precio: "$20",
    img: brahma,
  },

  {
    name: "Stella Artois",
    descripcion: "Aunque no es una cerveza argentina, Stella Artois es muy popular en el país y se encuentra en muchos bares y restaurantes.",
    precio: "$20",
    img: stellaArtois,
  },
  {
    name: "Andes",
    descripcion: "Andes es una cerveza lager suave y refrescante que es popular en toda Argentina.",
    precio: "$20",
    img: andes,
  },
  {
    name: "Isenbeck",
    descripcion: "Isenbeck es una cerveza lager alemana que se produce en Argentina y que se ha vuelto muy popular en todo el país.",
    precio: "$20",
    img: isenbeck,
  },
];

const tragos = [
  {
    name: "Fernet con Coca-Cola",
    descripcion:
      "Una bebida a base de Fernet, un amargo italiano, y Coca-Cola. Es muy popular en Argentina y se suele tomar como aperitivo o digestivo.",
    precio: "$20",
    img: fernetCoca,
  },
  { name: "Gin Tonic", descripcion: "Una bebida a base de ginebra y tónica.", precio: "$20", img: ginTonic },
  {
    name: "Caipirinha",
    descripcion: "Un trago brasileño hecho con cachaza (una especie de ron), limón, azúcar y hielo.",
    precio: "$20",
    img: caipirinha,
  },
  { name: "Daikiri", descripcion: "Un trago hecho con ron, limón y azúcar. ", precio: "$20", img: daikiri },
  {
    name: "Whisky",
    descripcion: "El whisky es una bebida popular en Argentina, especialmente entre los amantes de los licores fuertes.",
    precio: "$20",
    img: whisky,
  },
];

const gaseosas = [
  {
    name: "Coca-Cola",
    descripcion:
      "La marca de gaseosas más popular y reconocida en Argentina es Coca-Cola, con una presencia muy fuerte en el mercado y en la cultura popular.",
    precio: "$20",
    img: cocaCola,
  },
  {
    name: "Pepsi",
    descripcion: "Pepsi también es una marca de gaseosas muy popular en Argentina, aunque en menor medida que Coca-Cola.",
    precio: "$20",
    img: pepsi,
  },
  {
    name: "Fanta",
    descripcion: "Fanta es una marca de gaseosas que ofrece una variedad de sabores en Argentina, como naranja, uva y pomelo.",
    precio: "$20",
    img: fanta,
  },
  { name: "Sprite", descripcion: "Sprite es una gaseosa con sabor a lima-limón.", precio: "$20", img: sprite },
  {
    name: "Paso de los Toros",
    descripcion: "Paso de los Toros es una marca de gaseosas argentinas que ofrece una variedad de sabores, incluyendo pomelo, limón y naranja.",
    precio: "$20",
    img: pasoDeLosToros,
  },
];

const bebidasSelect = [{ tipo: vinos }, { tipo: cervezas }, { tipo: tragos }, { tipo: gaseosas }];
export default bebidasSelect;
