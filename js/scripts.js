

function validarForm() {

    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const vehiculo = document.getElementById('vehiculo');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    if (nombre.value === "") {
        alert("Por favor, escriba su nombre.");
        nombre.focus();
        return false;
    }

    if (apellido.value === "") {
        alert("Por favor, escriba su apellido.");
        apellido.focus();
        return false;
    }

    if (vehiculo.value === "") {
        alert("Por favor, ingrese su vehiculo.");
        vehiculo.focus();
        return false;
    }

    if (email.value === "") {
        alert("Por favor, escribe tu correo electrónico");
        email.focus();
        return false;
    }

    if (!emailValido(email.value)) {
        alert("Por favor, escribe un correo electrónico válido");
        email.focus();
        return false;
    }

    if (mensaje.value === "") {
        alert("Por favor, ingrese un mensaje.");
        mensaje.focus();
        return false;
    }

    
    if(nombre.value != "" && apellido.value != "" && vehiculo.value != "" && email.value != "" && emailValido(email.value)){
        return true;
    }
    



}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function limpiarForm() {
    document.getElementById("formContacto").reset();
}







