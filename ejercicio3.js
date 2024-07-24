const button = document.getElementsByTagName("button")
const input = document.getElementsByTagName("input")

let valor1;
let valor2;

let suma = function (valor1, valor2){
  let resultado = valor1 + valor2
  document.querySelector(".resultado").innerText = resultado;
}

function resta (valor1, valor2){
  let resultado  = valor1 - valor2

  if ( resultado <= 0 ) {
      document.querySelector(".resultado").innerText = 0;
      
    } else {
      document.querySelector(".resultado").innerText = resultado;
  }
}

function operation( i, valor1, valor2) {
  switch(i){
    case 0:
      suma(valor1, valor2)
      break;
      case 1:
        resta(valor1, valor2);
        break;
  }
}
for(let i = 0; i <button.length; i++) {
  button[i].addEventListener("click", () => {
    valor1 =Number(input[0].value);
    valor2 =Number(input[1].value);
    operacion(i, valor1, valor2);
  }, false);
}





