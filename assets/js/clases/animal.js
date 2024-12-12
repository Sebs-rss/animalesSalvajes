// Crear clase "Animal", con atributos de nombre, edad, imagen, comentarios y sonido

import animalesData from "./animales.js";

export class Animal {
    constructor(name, age, img, comments, sound) {
        let Nombre  = name
        this.getName = () => Nombre

        let Edad = age
        this.getAge = () => Edad

        let Imagen = img
        this.getImg = () => Imagen

        let Comentarios = comments
        this.getComments = () => Comentarios

        let Sonido = sound
        this.getSound = () => Sonido
}
}

// Función asíncrona para obtener la imagen (Img) del animal desde el archivo JSON fuente ("API")
/*************  ✨ Codeium Command 🌟  *************/
export async function getImg(Nombre) { //Es asícrona porque la imagen se obtiene de un archivo JSON. 
    try { // Try y catch para manejar los errores
        const respuesta = await fetch(animalesData);
        // Realiza una solicitud al archivo "animales.json" mediante la función de la clase "tipos.js", en donde está la conexión a la API

        const datos = await respuesta.json();
        // Convierte la respuesta en un objeto JSON

        const animalFound = datos.animales.find((item) => item.name === animal);
        // Busca el animal seleccionado en los datos. Encontrado es un objeto JSON con la propiedad "name" que contiene el nombre del animal

        return animalFound.imagen;
        // Retorna la imagen del animal
    } catch (error) {
        console.error("Error al obtener la imagen:", error);
        // Muestra un error si la solicitud falla
    }
}

// En el archivo "myScript.js", importar la función getImg y llamarla de la siguiente manera:
// const img = await getImg(animal);
// Donde "animal" es el nombre del animal que se quiere obtener la imagen.

/******  51ea5d4d-58e2-490e-92bb-5baaec9af9b1  *******/