let animales = (() => {
    const url = "http://localhost:5500/animales.json"
    const getAnimales = async () => {
        const response = await fetch(url)
        const { animales } = await response.json()
        return animales
    }

    return {getAnimales}
})()

export default animales





// Mostrando la imagen del animalito seleccionado en el contenedor de preview
/* document.getElementById("animal").addEventListener("change", function() {
    let img = document.createElement("img");
    img.src = `imgs/${this.value}.svg`;
    document.getElementById("preview").innerHTML = "";
    document.getElementById("preview").appendChild(img);
});
 */

// El formulario debe cumplir la función de registrar los animales en la tabla de la izquierda

    // Crear un array de animales en investigación
    

// Función para agregar el animal en investigación y mostrarlo en la tabla de animales en investigación, junto con el botón que reproduzca el audio con el sonito que emite el animalite.

