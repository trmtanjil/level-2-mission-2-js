// typof type guerd using 


type AlpahNeumeric = number|string
const add =(num1:AlpahNeumeric, num2:AlpahNeumeric)=>{
   if(typeof num1 ==='number'&& typeof num2 ==='number'){
     return num1+ num2
   }
   else{
  return  num1.toString()+num2.toString()
   }
}

console.log(add(2,3))
console.log(add(2,'2'))

console.log(add('2',3))

add('2','2')



//in guard 

type NormalUser={
    name:string;

}
type AdminUser={
    name:string;
    role:'Admin'
};

const getUserInfo =(user:NormalUser|AdminUser)=>{
  
    if('role' in user){

        console.log(`this ${user.name }and his rolwe is :${user.role} `)
    }else{
         console.log(`this ${user.name }and his rolwe is :${user.name} `)
    }

  
}


getUserInfo({name:'Admin'})