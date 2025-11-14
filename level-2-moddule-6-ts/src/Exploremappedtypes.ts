// mapped types 

//map 

const arrayofNumber :number[] = [1,3,4]

const araryofString :string[]=['2','3','5']

const arraOfStringUsingMap :string[]=arrayofNumber.map((num)=>num.toString())
console.log(arraOfStringUsingMap)

type AreOfNum ={
    height :number;
    width:number;
}

type AreaOfString = {
    height:string;
    width:string;
}

type height = AreOfNum['height']


type AreaOfStringg ={
    [key in 'height'|'width']:string;
}

type AreaOfbolean ={
    [key in 'height'|'width']:boolean;
}
type AreaOfbolean1 ={
    [key in keyof AreaOfString]:boolean;
}

type Area <T> ={
    [key in keyof T]:T[key];
}


const area1 :Area<{height:string ;width:boolean}>={
    height:'122',
    width:false,
}