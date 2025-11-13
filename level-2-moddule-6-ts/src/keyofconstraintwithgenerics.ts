
type RichPeaplesVhical ={
    car:string;
    bike:string;
    cng:string;
};

type myVehicle1 = 'bike'|'car'|'cng';
type myVehicle2 =keyof RichPeaplesVhical;

const myVehicle :myVehicle2 = 'car'

type User ={
    id:number;
    name:string;
    address:{
        city:string;
    }
}
const user :User={
    id:222,
    name:'tanjil',
    address:{
        city:'dhaka'
    },
}

const myid = user['id'];
const myName = user['name']
const address = user['address']
// console.log(myName,myid,address)


const getPropertyFromobj = <x>(obj:x, key: keyof x)=>{
    return obj[key]
}

const result1 = getPropertyFromobj(user,'name')
console.log(result1)


const product ={
    brand:'hp'
}
const result2 = getPropertyFromobj(product,'brand')

console.log(result1,result2)