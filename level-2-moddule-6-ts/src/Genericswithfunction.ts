//cenric Function

// const creatArryWithString = (value:string)=>[value];

// const creatArryWithNumber =(value:number)=>[value];

// const creatArryWithUserObj =(value:{
//     id:number;
//     name:string
// })=>{return [value]}


// const arrString = creatArryWithString('apple')
// const  arrNumber = creatArryWithNumber(122);
// const arrObj = creatArryWithUserObj({id:123, name:'next level'})

const creatArryWithGeneric = <T>(value:T)=>[value]


const arrString = creatArryWithGeneric('apple')
const  arrNumber = creatArryWithGeneric(122);
const arrObj = creatArryWithGeneric({id:123});

console.log(arrNumber,arrString,arrObj)


const createArryWithTule = (param1:string,param2:number)=>[param1,param2];


const creatTupleWithGeneric = <x,y>(param1:x,param2:y)=>[param1,param2]

const res1 =creatTupleWithGeneric('Mezba',false)
const res2 = creatTupleWithGeneric(121,'tanjil')
console.log(res1,res2)



const addStudenToCourse = <T>(studentInfo:T)=>{
return{
    course :'next level',
    ...studentInfo,
};
};

const student1= {
    id:123,
    name:'tanjil',
    hasPen:true,
};

const student2 = {
    id: 321,
    name:'tanvir',
    hasCar:true,
    isMarried:true,
};

const result =addStudenToCourse(student1)

console.log(result)