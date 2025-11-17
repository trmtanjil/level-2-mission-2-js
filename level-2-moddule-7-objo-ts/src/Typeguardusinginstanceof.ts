//oop : instance of type guard type narrowing

class Person{
    name:string;


    constructor(name:string){
        this.name=name;
    }
    getSleep(numberOfHours:number){
        console.log(`${this.name} doinik ${numberOfHours} gomai`)
    }
}

class Student extends Person{
    constructor(name:string){
        super(name);
    }

    doStudy(numberOfHours:number){
        console.log(`${this.name} doinik ${numberOfHours} ghonta stydy kore `)
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }
      takeClass(numberOfHours:number){
        console.log(`${this.name} doinik ${numberOfHours} ghonta se class nei `)
    }

}

//fungtion guard

const isStudent = (user:Person)=>{
    return user instanceof Student; // true false
}

const isTeacherr= (user:Person){
    return user instanceof Teacher;
}

const getUserInfo=(user:Person)=>{
if(isStudent(user)){
    user.doStudy(10)
}else if(isTeacherr(user)){
    user.takeClass(5)
}else{
    user.getSleep(14)
}
}

const student1 = new Student('mr student');

const theacher1 = new Teacher('mr theacher')

getUserInfo(student1)