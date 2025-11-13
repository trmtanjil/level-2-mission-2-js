//dynamically generalize : genaric

type GenericArray<T> =Array<T>;

// const friend:string[] = ['d','b','c'];
const friend:string[] = ['d','b','c'];
const friendd:GenericArray<string> = ['d','b','c'];



// const friendNum:number[] = [2,44,44,66];
const friendNum:number[] = [2,44,44,66];
const friendNumb:GenericArray<number> = [2,44,44,66];



// const isEligable:boolean[] =[true,false,true]
const isEligable:GenericArray<boolean> =[true,false,true]

type Coordinated <x,y>=[x,y];

const Coordinated1 : Coordinated<number,number>=[222,33]

const Coordinated2 : Coordinated<number, string>=[2,'2'];
console.log(Coordinated1,Coordinated2)
 
const userIst:GenericArray<object> =[{
    name:'tanjil',
    role:22,
},
{name:'kabir',
role:"44"
}
]

const userIstt:GenericArray<{name:string, role:number}> =[{
    name:'tanjil',
    role:22,
},
{name:'kabir',
role:33
}
]