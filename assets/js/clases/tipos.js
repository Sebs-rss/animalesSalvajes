// Utilizar paradigma POO para crear las instancias que representen a cada uno de los animales con sus atributos y métods (crear clases mediante un constructor)

import Animal from "./animal.js";

const audioPlay = document.getElementById("audioPlay");

class Leon extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Rugir() {
        console.log(this.getSonido())
        audioPlay.src = `assets/sounds/${this.getSonido()}`;
        audioPlay.play();
    }
}

class Lobo extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Aullar() {
        console.log(this.getSonido())
        audioPlay.src = `assets/sounds/${this.getSonido()}`;
        audioPlay.play();
    }
}

class Oso extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Gruñir() {
        console.log(this.getSonido())
        audioPlay.src = `assets/sounds/${this.getSonido()}`;
        audioPlay.play();
    }
}

class Serpiente extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Sisear() {
        console.log(this.getSonido())
        audioPlay.src = `assets/sounds/${this.getSonido()}`;
        audioPlay.play();
    }
}

class Aguila extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Chillar() {
        console.log(this.getSonido())
        audioPlay.src = `assets/sounds/${this.getSonido()}`;
        audioPlay.play();
    }
}