//Escucha a que se carge completamente el html para evitar errores de cargar
window.addEventListener('load', ()=>{
  const display = document.querySelector('.calculator-display'); //guarda el primer elemento con la clase
  const keypadButtons = document.getElementsByClassName('keypad-btn')

  //convertimos el html colecciont a array
  const keypadButtonsArray = Array.from(keypadButtons)

  //iteramos sobre el array de botones
  keypadButtonsArray.forEach((button) => {
    //a cada boton le agregamos un listener 
    button.addEventListener('click', ()=>{
      //se va a encargar de dale funcionaleidad a cada botton
      calculadora(button, display)
    })
  });
})

function calculadora(button,display){
  //innerHTML nos devuelve el caracter que tenga el div
  switch (button.innerHTML) {
    case 'C':
      borrar(display);
      break;

    case '=':
      calcular(display);
      break;

    case '%':
      calcularPorcentaje(display);
      break;

    default:
      actualizar(display, button);
      break;
  }
}

function calcular(display){
  //'eval' toma lo que contenga en ese momento el display como un String , lo resuelve y Actualizamos el display
  display.innerHTML = eval(display.innerHTML)
}

function calcularPorcentaje(display){
  display.innerHTML = parseFloat(display.innerHTML) / 100;
}

function actualizar(display, button){
  //preguntamos si el innerHTML es '0' para saber si hay q borrarlo o No
  if (display.innerHTML == 0){
    display.innerHTML = '';
  }
  //actualizasmo con lso botones
  display.innerHTML += button.innerHTML;
}

function borrar(display){
  display.innerHTML = 0;
}
