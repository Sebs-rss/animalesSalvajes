// Traigo los animales desde la API, o en este caso desde el archivo JSON de animales

let animalesData = (() => {
    const getAnimales = async () => {
        const response = await fetch('./animales.json')
        const { animales } = await response.json()
        return animales
    }

    return {getAnimales}
})() // Autoejecutable

export default animalesData