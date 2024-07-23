let form = document.getElementById("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  limpiarError();

  let nombre = document.getElementById("nombre").value
  let asunto= document.getElementById("asunto").value
  let mensaje = document.getElementById("mensaje").value
  let resultado = document.getElementById("resultado")

  const esValido = validacionDatos(nombre, asunto, mensaje)

  console.log(esValido)
  if (esValido) {
    resultado.innerText = 'Mensaje enviado con éxito!!!.'
  }
})

function validacionDatos(nombre, asunto, mensaje) {
  const regNombre = /[a-z]+/i
  const regAsunto = /[a-z]+/i
  const regMensaje =/[a-z]+/i
  const nombreValido = regNombre.test(nombre)
  const asuntoValido = regAsunto.test(asunto)
  const mensajeValido = regMensaje.test(mensaje)


  if (!nombreValido) {
    document.querySelector(".errorNombre").innerText = 'El nombre es requerido.'
  }
  if (!asuntoValido) {
    document.querySelector(".errorAsunto").innerText = 'El asunto es requerido.'
  }
  if (!mensajeValido) {
    document.querySelector(".errorMensaje").innerText = 'El mensaje es requerido.'
  }


  return nombreValido && asuntoValido && mensajeValido
}

function limpiarError() {
  let errorNombre = document.querySelector(".errorNombre")
  let errorAsunto = document.querySelector(".errorAsunto")
  let errorMensaje = document.querySelector(".errorMensaje")

  errorNombre.innerText = ''
  errorAsunto.innerText = ''
  errorMensaje.innerText = ''
}
