// Utilizar paradigma POO para crear las instancias que representen a cada uno de los animales con sus atributos y métods (crear clases mediante un constructor)

import Animal from "./animal.js";

new class Leon extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Rugir() {
        console.log(this.getSound())
        audioPlay.src = `assets/sounds/${this.getSound()}`;
        audioPlay.play();
    }
}

new class Lobo extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Aullar() {
        console.log(this.getSound())
        audioPlay.src = `assets/sounds/${this.getSound()}`;
        audioPlay.play();
    }
}

new class Oso extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Gruñir() {
        console.log(this.getSound())
        audioPlay.src = `assets/sounds/${this.getSound()}`;
        audioPlay.play();
    }
}

new class Serpiente extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Sisear() {
        console.log(this.getSound())
        audioPlay.src = `assets/sounds/${this.getSound()}`;
        audioPlay.play();
    }
}

new class Aguila extends Animal {
    constructor(name, age, img, comments, sound) {
        super(name, age, img, comments, sound);
    }
    Chillar() {
        console.log(this.getSound())
        audioPlay.src = `assets/sounds/${this.getSound()}`;
        audioPlay.play();
    }
}