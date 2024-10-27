// Crear una aplicación web que permita
// Agregar una tabla los animales en investigación

import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clsses/tipos.js";
import animalesData from "./animales.js";

let animales = []

// Opcional: refrescar el formulario a un estado inicial luego de registrar cada animal

// Opcional: al hacer click en la img. del animal, se debe abrir un modal con el detalle registrado del animal.


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

window.playSound = (nombre) => {
    const animal = animales.find((a) => a.getNombre() == nombre)
    console.log(animal)
    nombre == "Leon" ? animal.getRugir() : nombre == "Lobo" ? animal.getAullar() : nombre == "Oso" ? animal.getGruñir() : nombre == "Serpiente" ? animal.getSisear() 
}