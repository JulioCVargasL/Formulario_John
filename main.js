const ficha = document.getElementById("ficha");
/**--------------------
 * para validar que lo que sea valodo sean letras 
 * let declara variables
 */
/** validacion con match */
/*
const validar = function () {
  
  let valor = /^[a-zA-Z]{3}[_]{1}[0-9]{5}$/;
  let campo = ficha.value
  if (campo.match(valor) != null) {
    
  } else {
    alert("no valido")
  }
}

ficha.addEventListener("blur", validar);

}

Operacion ternaria, Buscar pregunta? verdadero: falso;*/

const validar = function (campo) {
  let validation = /^[a-zA-Z]{3}_[0-9]{5}$/

  console.log(validation.test(ficha.value))
}
 ficha.addEventListener("blur", validar);
