//union 
 type UserRole = 'admin'| 'user';

 const getDeshboard = (role:UserRole)=>{
    if(role ==='admin'){
        return 'admin deshboard0';
    }else if (role ==='user'){
        return 'user deshboard'
    }else{
        return 'guest deshbord'
    }
 }
console.log( getDeshboard('admin'))
// console.log( getDeshboard('guest'))


//intersection &

type Employee = {
    id:string;
    name:string;
    phoneNo:string;
};
type Manager ={
    degignation : string;
    teamSize:number;
};

type EmployeeMenager =Employee & Manager;

const tanjilurRahman :EmployeeMenager={
    id:'123',
    name:'tanjilur rahman',
    phoneNo:'091930',
    degignation:'admin',
    teamSize:122,
}
console.log(tanjilurRahman)