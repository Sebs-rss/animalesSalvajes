// Crear clase "Animal", con atributos de nombre, edad, imagen, comentarios y sonido

class Animal {
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

    get Nombre() {
        return this.getName()
    }

    get Edad() {
        return this.getAge()
    }

    get Imagen() {
        return this.getImg()
    }

    get Comentarios() {
        return this.getComments()
    }

    get Sonido() {
        return this.getSound()
    }
}
