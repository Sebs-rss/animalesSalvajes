// Crear una aplicación web que permita...
// Agregar una tabla los animales en investigación

import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/tipos.js"; // importa las diferentes clases de animales de la carpeta "clases"

import getImg from "./animales.js";
const img = await getImg();

let animalRegister = [] // Declara un array que almacenará los animales registrados en el formulario

//EL formulario...
//Encapsulación de los listener con una función autoejecutable (IIFE)
(function () { // Declarando la función
    document.getElementById("animal").addEventListener("change", async function (event) { // Agrega un evento listener al elemento con id "animal", la lista desplegable desde el formulario (select) de animales
        const nombre = event.target.value;  // Obtiene el valor seleccionado (nombre del animal)
        const imagen = await animal.getImg(nombre); // Llama a la función asíncrona "getImg" de forma asíncrona para obtener la imagen del animal seleccionado
        document.getElementById("preview").style.backgroundImage = `url(./assets/imgs/${imagen})`; // Cambia la imagen de fondo del elemento con id "preview" para mostrar la imagen del animal seleccionado
    });

    // Añade un evento listener al botón de registro (id "btnRegistrar") que se ejecuta al hacer click
    document.getElementById("btnRegistrar").addEventListener("click", async function (event) {
        event.preventDefault(); // Previene la recarga del formulario (comprotamiento por default)

        // Consigue valores del formulario
        const nombre = document.getElementById("animal").value;
        const edad = document.getElementById("edad").value;
        const comentarios = document.getElementById("comentarios").value;

    // Validación: si hay algún campo vacío, muestra una alerta
    if (!nombre || !edad || !comentarios) { 
        alert("Completa todos los campos antes de registrar 🐾.");
        return;
    }

// Cards de animales participantes del estudio 🐾 (grilla)
        // Llama a las funciones asíncrona para obtener imagen y sonido del animal seleccionado
        const imagen = await getImg(nombre);
        const sonido = await animal.getSound(nombre);

// Crea una instancia del animal seleccionado según su clase específica, según la selección del formulario. Esta información se guardará dentro del array  "animales" declarado arriba
let animal;
switch (nombre) { //Valida y asigna al animal seleccionado como un registro dentro del array "animales" de acuerdo a la clase del animal e indicando como parámetros, la información a registrar del formulario, para cada animal
    case "Leon":
        animal = new Leon(nombre, edad, imagen, comentarios, sonido);
        break;
    case "Lobo":
        animal = new Lobo(nombre, edad, imagen, comentarios, sonido);
        break;
    case "Oso":
        animal = new Oso(nombre, edad, imagen, comentarios, sonido);
        break;
    case "Serpiente":
        animal = new Serpiente(nombre, edad, imagen, comentarios, sonido);
        break;
    case "Aguila":
        animal = new Aguila(nombre, edad, imagen, comentarios, sonido);
        break;
    default:
        alert("Animal no válido"); // Si no se seleccionó un animal, muestra una alerta
}
        
// Agrega el animal a la tabla
newAnimalGrid(animal);

// Opcional: refrescar el formulario a un estado inicial luego de registrar cada animal
refreshForm();
    });
})(); // La IIFE se auto ejecuta


// Funciones y eventos




// Función que AGREGA EL ANIMAL A LA TABLA de registros en el DOM
function newAnimalGrid(animal) {
    const animalesContainer = document.getElementById("Animales");
    // Selecciona el contenedor donde se mostrarán los animales registrados

    const card = document.createElement("div");
    // Crea un div para cada animal

    card.classList.add("card", "participante", "m-2");
    // Añade clases de Bootstrap para el estilo de la tarjeta

    card.style.width = "30%";
    // Define el ancho de la tarjeta

    // Define el contenido HTML de la tarjeta con la imagen y el botón de sonido
    card.innerHTML = `
        <img src="./assets/imgs/${getImg()}" class="card-img-top img-fluid" alt="${animal.getNombre()}" style="height: 300px; width: 240px; object-fit: cover;">
        <div class="card-body">
        <button class="btn btn-reproducir"><img src="./assets/imgs/audio.svg" style="width: 25px; height: 25px;"></button>
        </div>
    `;

 // Añade un evento listener al botón de sonido para reproducir el sonido del animal del animal registrado
 const btnReproducir = card.querySelector(".btn-reproducir");
 btnReproducir.addEventListener("click", () => playSound(animal.getSonido()));

 // Añade un listener para mostrar el modal con los detalles del animal cuando se hace clic en la tarjeta
 card.addEventListener("click", () => showModal(animal));

 animalesContainer.appendChild(card);
 // Añade la tarjeta al contenedor "Animales". AppendChild() agrega el elemento como el último en el DOM

 animalRegister.push(animal);
 // Agrega el animal al array de animales registrados. Push() agrega un elemento al final del arreglo
}

// Función para REPRODUCIR el SONIDO del animal
function playSound(sonido) {
 console.log("Reproduciendo sonido:", sonido);
 // Imprime en la consola el sonido que se va a reproducir para verificar

 new Audio(`./assets/sounds/${sonido}`).play();
 // Reproduce el archivo de sonido del animal
}


// Mostrar en Modal los detalles del animal registrado seleccionado al presionar la card
function showModal(animal) {
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    // Inicializa el modal de Bootstrap

    const modalBody = document.querySelector("#exampleModal .modal-body");
    // Selecciona el cuerpo del modal donde se mostrarán los detalles del animal. Se usa querySelector() para seleccionar el elemento que contenga el modal

    // Define el contenido HTML del modal con la imagen y los detalles del animal
    modalBody.innerHTML = `
       <img src="./assets/imgs/${getImg()}" class="img-fluid" style="height: 300px; width: 240px; object-fit: cover; align-self-center;" alt="${animal.getNombre()}">
        <p><strong>Edad:</strong> ${animal.getEdad()}</p>
        <p><strong>Comentarios:</strong><br> ${animal.getComentarios()}</p>
    `;

    modal.show();
    // Muestra el modal en pantalla
}


// Función que LIMPIAR EL FORMULARIO después de registrar un animal
function refreshForm() {
    // Restablecer el campo de nombre
    const animalSelect = document.getElementById('animal');
    animalSelect.selectedIndex = 0; // Seleccionar la opción por defecto

    // Restablecer el campo de edad
    const edadSelect = document.getElementById('edad');
    edadSelect.selectedIndex = 0; // Seleccionar la opción por defecto

    // Limpiar el campo de comentarios
    document.getElementById('comentarios').value = '';

    // Restaurar la imagen de preview a lion.svg
    const preview = document.getElementById('preview');
    preview.style.backgroundImage = "url('./assets/imgs/lion.svg')";
}



// Opcional: al hacer click en la img. del animal, se debe abrir un modal con el detalle registrado del animal.


/*
// Anterior: revisar/comentar o eliminar este código
const refresh = () => {
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";
    animales.forEach((p,i) => {
        animalesTemplate.innerHTML += `
            <div class="px-3 pb-2">
                <div class="bg-dark text-white">
                    <img
                    height="200"
                    src="${p.getImg()}"
                    data-toggle="modal" data-target="#exampleModal"
                    onclick="modalDetails('${i}')"
                    />
                    <div>
                        <button onclick="playSound('${p-getNombre()}') " class="btn btn-secondary w-100">Reproducir sonido</button>
                    </div>
                </div>
            </div>`
})

document.querySelectorAll(".card-body button").forEach((btn) => btn.addEventListener("click", activarHabilidad))
}



// Alt. profe... falta, no funciona
window.playSound = (nombre) => {
    const animal = animales.find((a) => a.getNombre() == nombre)
    console.log(animal)
    nombre == "Leon" ? animal.getRugir() : nombre == "Lobo" ? animal.getAullar() : nombre == "Oso" ? animal.getGruñir() : nombre == "Serpiente" ? animal.getSisear() : nombre == "Aguila" ? animal.getChillar()
}*/