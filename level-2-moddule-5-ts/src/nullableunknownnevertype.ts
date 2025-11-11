// nulleblee types 

const getUser=(inpute: string | null)=>{
    if(inpute){
        console.log(`frob db :${inpute}`)
    }else{
        console.log('from db: all user ')
    }
};

getUser( null)


// unknown

const discountCalculator = (inpute:unknown)=>{
 if(typeof inpute ==='number'){
    console.log(`discounted price ${inpute*0.1}`)
 }else if(typeof inpute === 'string'){
    const [arrConvert] =  inpute.split(' ')
    console.log(Number(arrConvert ) *0.1);
 }else{
    console.log('wrong input')
 }

}

discountCalculator(100)
discountCalculator('100 tk')
discountCalculator(null)

//void 

const thowError =(msg:string):never=>{
    throw new Error(msg)
}
thowError('lksdjfl')