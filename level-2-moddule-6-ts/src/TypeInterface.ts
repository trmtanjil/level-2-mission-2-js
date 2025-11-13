type user= {
name :string;
age :number;
}

type role = {
    user:user;
    role : 'admin'|'user';
}
type userRole =user|role;

const user1:userRole = {
    name:'tanjil',
    age:22,
    role :'admin',
}
console.log(user1)

//interface use only object type data uses

interface usser {
    name:string;
    age:number;
}

interface newUser extends usser{
    role :'admin'|'user';
}
const user2:newUser = {
    name:'tanjilur',
    age:23,
    role :'admin',
}
console.log(user2)


// emplement with function 

type add =(num1:number, num2:number,)=>number;

interface Iadd {
    (num1:number, num2:number):number;
}

const addd:Iadd =(num1,num2)=>num1+num2;


console.log(addd(2,2))


type friend =  string[];

interface Ifriends {
    [index :number]:string;
}

const friendd:Ifriends = ['s','d','d'];

console.log(friendd)