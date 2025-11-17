"use strict";
// class Animale{
//     name:string;
//     species:string;
//     sound:string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(name:string, species:string,sound:string){
//         this.name=name;
//         this.sound=sound;
//         this.species=species;
//     }
//     makeSound(){
//         console.log(`${this.name} animal is making sound :${this.sound}`);
//     }
// }
//parameter properties
class Animale {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} animal is making sound :${this.sound}`);
    }
}
const cat = new Animale('cat bhai', 'cat', 'mew mew');
const dog = new Animale('dogesh bhai', 'dog', 'dhew gew ');
console.log(dog.name);
cat.makeSound();
//# sourceMappingURL=classObjectTs.js.map