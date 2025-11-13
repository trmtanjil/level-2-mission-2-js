let anything : any;

anything = 'tanjil';

(anything as number);
(anything as string)

console.log(anything)

const kgToGramConverter = (input:string |  number)
:string | number|undefined =>{
    if(typeof input === 'number'){
        return input *1000;
    }else if (typeof input === 'string'){
        let [convertNu] = input.split(' ');
        return  `converted output is ${Number (convertNu)*1000}`
    }
}

const time = kgToGramConverter(10) as number;
const time2 = kgToGramConverter('10 gm') as string;
console.log({time, time2})

type customError = {
    message : string;
}

try{

}catch(err){
    console.log(( err as customError).message)
}