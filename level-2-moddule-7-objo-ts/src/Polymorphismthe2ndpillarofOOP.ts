// polmorphism : bohurupi




class Person{
    getSleep (){
        console.log(` im a normal person i  sleep for 8 hours`)
    }
}


class Student extends Person{
getSleep() {
    console.log(`im a student i sleep for 7 hours`)
}
}

class NextLevelDeveloper extends Person{
    getSleep()  {
        console.log(`im a next level developer . i sleep for 6 hours`)
    }
}
const getSleepingHours =(param:Person)=>{
param.getSleep();
}

const person1 = new Person()

const person2 =new Student()

const person3 =new NextLevelDeveloper()



getSleepingHours(person2)


class Shap {
    getArea():number{
        return 0;
    }
}

class Circle extends Shap{
    // area = pi * r *r 

    radius :number;

    constructor (radius:number){
        super()
        this.radius = radius 
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius
    }
}

class RectAngle extends Shap{
    // area = height * width
    height :number;
    width : number;

    constructor(height:number,width:number){
        super()
        this.height =height;
        this.width = width
    }
    getArea(): number {
        return this.height*this.width
    }
}

const getArea =(param:Shap)=>{
    console.log(param.getArea())
}
const shap1 = new Shap();
const shap2 = new Circle(10);
const shap3 = new RectAngle(10,10)

getArea(shap3)