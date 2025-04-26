let butEnviarOnClick = function() {
  let inputNombre = document.getElementById("nombre")
  let inputCorreo = document.getElementById("correo")
  let areaMensaje = document.getElementById("mensaje")
  let divAreaMensajes = document.getElementById("area_mensajes")

  if(inputNombre.value == "" ||
    inputCorreo.value == "" ||
    areaMensaje.value == ""
  ) {
    divAreaMensajes.innerText = "Debe ingresar todos los campos"
    return
  }

  if(!inputCorreo.value.includes("@") ||
    !inputCorreo.value.includes(".")
  ) {
    divAreaMensajes.innerText = "El correo no tiene el formato valido"
    return
  }

  divAreaMensajes.innerText = "Se envio correctamente"
}

let main = function() {
  let butEnviar = document.getElementById("but_enviar")
  butEnviar.addEventListener("click", butEnviarOnClick)
}

main()