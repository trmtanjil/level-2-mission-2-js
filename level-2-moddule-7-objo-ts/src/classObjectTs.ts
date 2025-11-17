// class Animale{
//     name:string;
//     species:string;
//     sound:string;

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

class Animale{
 

    constructor(public name:string, public species:string, public sound:string) {

    }
    makeSound(){
        console.log(`${this.name} animal is making sound :${this.sound}`);
    }
}

const cat = new Animale('cat bhai','cat','mew mew')

const dog = new Animale('dogesh bhai', 'dog','dhew gew ')
console.log(dog.name)
cat.makeSound()