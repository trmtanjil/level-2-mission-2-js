type User={
    id:number;
    name:{
        firsName:string;
        lasName:string;
    };
    gender:'male'|'female';
    ContactNo:string;
    address:{
        division:string;
        city:string;
    };
}

const user1:{
    id:number;
    name:{
        firsName:string;
        lasName:string;
    };
    gender:'male'|'female';
    ContactNo:string;
    address:{
        division:string;
        city:string;
    };
}={
id:123,
name:{
    firsName:'tanjilur',
    lasName:'Rahman',
},
gender:'male',
ContactNo:'19283918',
address:{
    division:'dhaka',
    city:'narsindi'
}
}

const user2 :User={
id:123,
name:{
    firsName:'anamol',
    lasName:'hauqe',
},
gender:'male',
ContactNo:'19283918',
address:{
    division:'dhaka',
    city:'dhaka'
}
}
console.log(user2)

type AddFunc = (num1:number, num2:number)=>number;

const add :AddFunc=(num1,num2)=>num1+num2;
console.log(add(2,2))