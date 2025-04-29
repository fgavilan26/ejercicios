let butEnviarOnClick = function() {
  let inputNombre = document.getElementById("nombre")
  let inputCorreo = document.getElementById("correo")
  let textMensaje = document.getElementById("mensaje")
  let nombreError = document.getElementById("nombre_Error")
  let correoError = document.getElementById("correo_Error")
  let mensajeError = document.getElementById("mensaje_Error")

  nombreError.innerText = ""
  correoError.innerText = ""
  mensajeError.innerText = ""

  if(inputNombre.value == "" ) {
    nombreError.innerText = "Debe ingresar su nombre"
  }

  if(inputCorreo.value == "") {
    correoError.innerText = "Debe ingresar su correo"
  } else if (!inputCorreo.value.includes("@") || !inputCorreo.value.includes(".")) {
    correoError.innerText = "El correo no tiene el formato válido"
  }

  if(textMensaje.value == "") {
    mensajeError.innerText = "Debe ingresar un mensaje"
  }

}

let main = function() {
  let butEnviar = document.getElementById("but_Enviar")
  butEnviar.addEventListener("click", butEnviarOnClick)
}

main()