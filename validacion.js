
const formularioContacto = document.querySelector('.formcontato__form');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('mail');
const inputAsunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');


//tomamos la clase del span que va a mostrar el msj de error
const msjError = document.querySelector('.error-nombre')
const msjErrorMail = document.querySelector('.error-email')
const msjErrorAsunto = document.querySelector('.error-asunto')
const msjErrorTexto = document.querySelector('.error-mensaje')
const msjEnvioExitoso =document.querySelector('.mensaje-exito')



formularioContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    msjError.textContent = "";
    let errorEncontrado = false;

    if (inputNombre.value.trim() === "") {

        msjError.textContent = "Este campo no debe estar vacío "
        
        errorEncontrado = true;

    }
    else if (inputNombre.value.length < 4) {

        msjError.textContent = "Nombre no válido, debe contener mas de 4 letras ";
      
        errorEncontrado = true;

    }

    if (inputEmail.value.trim() === "") {

        msjErrorMail.textContent = "Este campo no debe estar vacío ";
        errorEncontrado = true;

    }
    else {

        msjErrorMail.textContent = " ";
    }

    if (inputAsunto.value.trim() === "") {

        msjErrorAsunto.textContent = "Este campo no debe estar vacío ";
        errorEncontrado = true;
    }
    else {
        msjErrorAsunto.textContent = " ";
    }



    if (mensaje.value.trim() === "") {

        msjErrorTexto.textContent = "Este campo no debe estar vacío ";
        console.log(msjErrorTexto)
    }
    else {
        msjErrorTexto.textContent = " ";
    }

    msjEnvioExitoso.textContent=""
    if (!errorEncontrado) {
        formularioContacto.reset(); 
        msjEnvioExitoso.textContent="¡Tu consulta fue enviada!";
    }
})



