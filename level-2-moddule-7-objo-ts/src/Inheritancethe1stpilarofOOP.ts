class parant {
        name:string; //common
    age:number;//common
    address:string;//common

    constructor(name:string,age:number,address:string){
        this.name = name;
        this.age = age;
        this.address=address;
    }

    //common
    getSleep(numberOfour:number){
        console.log(` ${this.name} ato ghonta ghumai ${numberOfour}`)
    }
}

class Student extends parant{

    rollNo:number;

    constructor(nam:string,age:number,address:string,rollNo:number)
       {
         super( nam,age,address, )
   
         this.rollNo=rollNo
       }
    }
   
 
const Student1 = new Student(`mr fakibaz`,17,'Bangladesh',21)

console.log(Student1.getSleep(22))
 
class Teacher extends parant{
  
    designation:string;//own property

    constructor(name:string,age:number,address:string, designation:string){

        super( name, age, address, )
   
        this.designation=designation
    }
   
    takeClass(numberOfClass:number){
        console.log(`${this.name} eto gonta class nei ${numberOfClass}`)
    }
}


const theacher1 = new Teacher(
    'mr. smart thecher',
    25,
    'dhaka',
    'senion teacher'
)
console.log(theacher1.takeClass(22))


console.log(Student1.rollNo)






























// class Student{
//     name:string; //common
//     age:number;//common
//     address:string;//common

//     constructor(name:string,age:number,address:string){
//         this.name = name;
//         this.age = age;
//         this.address=address;
//     }

//     getSleep(numberOfour:number){
//         console.log(` ${this.name} ato ghonta ghumai ${numberOfour}`)
//     }
// }