// Procedimiento para traer los datos del registro a editar
// Ej: "id=9&nombre=bulbasaur"
let cadena = location.search; // Cadena con los símbolos & y =

// Crear un objeto URLSearchParams con la cadena
// El objeto URLSearchParams en JavaScript es una
// interfaz que proporciona métodos y propiedades para
// trabajar con las cadenas de consulta (query strings) en URLs.
// Facilitando la obtención de parámetros y valores individuales
let datos = new URLSearchParams(cadena);

// Crear un objeto para almacenar los nombres de las variables y sus valores
let resultado = {};

// Iterar sobre los parámetros y guardar los nombres y valores en el objeto resultado
for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
}

// Imprimir el resultado
console.log(resultado); // Esto mostrará un objeto con las variables y sus valores


// Procedimiento para mostrar los datos a editar en el formulario de edición
document.getElementById("id").value = resultado["id"]
document.getElementById("marca").value = resultado["marca"]
document.getElementById("modelo").value = resultado["modelo"]
document.getElementById("anio").value = resultado["anio"]
document.getElementById("detalle").value = resultado["detalle"]
document.getElementById("imagen").value = resultado["imagen"]
document.getElementById("precio").value = resultado["precio"]

if(resultado["renta"]=='true') {
    document.getElementById("renta").checked = true ;
} else {
    document.getElementById("renta").checked = false ;
}


function modificar() {
    let id = document.getElementById("id").value
    let marcaForm = document.getElementById("marca").value
    let modeloForm = document.getElementById("modelo").value
    let anioForm = document.getElementById("anio").value
    let detalleForm = document.getElementById("detalle").value
    let imagenForm = document.getElementById("imagen").value
    let precioForm = document.getElementById("precio").value
    // let rentF = document.getElementById("renta").value
    // let rentaForm = rentF == 'on' ? 1 : 0 ;
    let rentaForm = 0;
    if(document.getElementById("renta").checked == true) {
        rentaForm = 1;
    } else {
        rentaForm = 0;
    }

    let vehiculo = {
        marca: marcaForm,
        modelo: modeloForm,
        anio: anioForm,
        detalle: detalleForm,
        imagen: imagenForm,
        precio: precioForm,
        renta: rentaForm,
    }
    // let url = "http://localhost:5000/update/"+id
    let url = "https://vintagewheels.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(vehiculo),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
            window.location.href = "./vehiculos.html";  
          
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}