const user :{
    // organization:'own company';
   readonly organization:string; //read only
    firsName:string;
        middleName?:string;
        lastName :string;
        isMarrid : boolean;


}={
    organization:'own company',
    firsName:'tanjilur',
    lastName:'Rahman',
    isMarrid:true,
}

// user.organization='others company'

console.log(user)