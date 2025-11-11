// ? : trnary operator : decision making 
//?? : nulllish coalescing operator : null?undefined 
//?. optional chaining 

const ageComparAge = (age:number)=>{
    if(age >=21){
        console.log('you are adult')
    }
    else {
        console.log('you are smoll ')
    }
}

(ageComparAge(22))



const ageComparAgee = (age:number)=>{

const result = age >= 21 ? 'you are aligible' : 'you are not aligible';
console.log(result)
}


(ageComparAgee(22))


// const userTheme = undefined;
const userTheme = 'green theme';


const selectTheme = userTheme ?? 'light theme';

console.log(selectTheme)


const isAuthenticated = false;
const isAuthenticatedd = false;
const resultTernary = isAuthenticated ? isAuthenticated : 'you are guest';

const resultWithNulish = isAuthenticated ?? 'you are guest'

console.log({resultTernary},{resultWithNulish})


// optional chaining

const optionalChaining : {
    addres:{
        city:string;
        town:string;
        postalCode?:string
    }
}={
    addres:{
        city:'daka',
        town:'dhana',
    }
}
console.log(optionalChaining?.addres?.postalCode)