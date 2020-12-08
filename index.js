const Btn = document.getElementById('btn')
const BorraResultado = document.getElementById('borraResultado')
let Resultado = document.getElementById('resultado')
let msjOriginal = document.getElementById('mensajeOriginal')

const Vocales = ["a","e","i","o","u"]

const ObtenConvierte = () =>{
  let msjArr = msjOriginal.value.split('');
  const fragment = document.createDocumentFragment()
  let arrConNum = [] 
  let res = msjArr.map((letra) =>{
   
    if(letra == 'a'){
      letra = 1}
    else if(letra == 'e'){
      letra = 2
    }else if(letra == 'i'){
      letra= 3
    }else if(letra == 'o'){
      letra = 4
    }else if( letra == 'u'){
      letra = 5
    }
    arrConNum.push(letra)
     //console.log(letra)        
  })
  console.log(arrConNum)
      const ParrafoItem = document.createElement('p')
      ParrafoItem.textContent= ` ${arrConNum.join('')}`
      fragment.appendChild(ParrafoItem) 
      Resultado.appendChild(fragment)

  }



Btn.addEventListener("click",()=>{
ObtenConvierte()
//ya()
 msjOriginal.value = ''
})
BorraResultado.addEventListener('click', () =>{
 
  while (Resultado.firstChild) {
  Resultado.removeChild(Resultado.firstChild);
}
})
