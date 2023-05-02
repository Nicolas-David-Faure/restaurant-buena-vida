/*function duplicateCount(text){
  let newString = text.toLowerCase()
  let result = 0;
  let objChars = {} 
  
  for(let i = 0; i < newString.length; i++){
    let char = newString[i]
    
    
    if(!objChars[char]){
      objChars[char] = 1;
    }else{
      objChars[char]++
    }
  }

  console.log(objChars)


  let keys = Object.keys(objChars)

  keys.forEach((key)=>{
    if(objChars[key] > 1){
      result++
    }
  })
  
  console.log(result)
}
duplicateCount("aA11")*/

/*
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)*/

/*
function multiplicarDigitos(numero) {
  // Convertimos el número a un array de dígitos
  const digitos = Array.from(numero.toString()).map(Number);
  console.log(digitos)
  // Multiplicamos los dígitos y obtenemos el resultado
  let resultado = digitos.reduce((total, digito) => total * digito, 1);
  
  // Si el resultado tiene más de una cifra, llamamos a la función recursivamente
  if (resultado >= 10) {
    resultado = multiplicarDigitos(resultado);
  }
  
  // Devolvemos el resultado final
  return resultado;
}

// Ejemplo de uso
const numero = 39;
console.log(multiplicarDigitos(numero)); // Devuelve 2*/

/*
const convertToFormatHour=(seconds)=>{
  let hours = (Math.floor(seconds / 3600)).toString();
  let minutes = (Math.floor(seconds / 60)%60).toString();
  let second = (Math.floor(seconds % 60)).toString();
  return `
  ${(hours.length == 2? hours : "0"+hours)}:${(minutes.length== 2? minutes :"0"+minutes)}:${(second.length ==2 ? second : "0"+second)}`;
}

console.log(convertToFormatHour(0))*/



//Hora - 3600 segundos es una hora
//Minutos - 60 segundos es un minuto - 


const convertToAFormatHour =(totalSeconds)=>{
  let hours = Math.floor(totalSeconds / 3600).toString()
  let minutes = (Math.floor(totalSeconds / 60)%60).toString()
  let seconds = (totalSeconds % 60).toString()
  return `${hours.length == 2 ? hours : "0"+hours}:${minutes.length == 2 ? minutes : "0"+minutes}:${seconds.length == 2 ? seconds : "0"+seconds}`
}

console.log(convertToAFormatHour(8000))