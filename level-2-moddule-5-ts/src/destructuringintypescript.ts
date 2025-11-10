//Destructuring in typescript

const student = {
    name:'tanjil',
    info:{
        homeToun :'narsindi',
        upozila:'monohardi'
    },
    contact:9190283019,
}

const {name:fullName,info:{homeToun}}=student
console.log(student.info.homeToun)

console.log(fullName,homeToun)

const friendd  = ['illu','billue','candy']

const [a,billue,c]=friendd;

console.log(a,billue,c)