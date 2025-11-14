// constraint : strict rule deya


type Cextand ={id:number; name:string;}
const addStudenToCours = <T extends Cextand >(studentInfo:T)=>{
return{
    course :'next level',
    ...studentInfo,
};
};

const student11= {
    id:123,
    name:'tanjil',
    hasPen:true,
};

const student22 = {
    id: 321,
    name:'tanvir',
    hasCar:true,
    isMarried:true,
};

const student3 ={
    id:1212,
    name:'tanjid',
    // isMarried:true
}

const resultt =addStudenToCours(student3)

// console.log(result,student2,student3)