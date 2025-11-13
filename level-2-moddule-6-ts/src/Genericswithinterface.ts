interface Developer<T,x=null>{
    name:string;
    salay:number;
    device:{
        brand:string;
        model:number;
        releasedYear:number;
    };
    smartWatch:T;
    bike?:x;
}

type withoutBrand ={
    heartRate :string;
    stopWatch:boolean;
}
const richDeveloper :Developer<withoutBrand,{brand:'yamaha',power:'180cc'}>={
    name:'tanjil',
    salay:33,
    device:{
        brand:'korola',
        model:2002,
        releasedYear:2010

    },
    smartWatch:{
        heartRate:'22rate',
        stopWatch:true
    },
    bike:{
        brand:"yamaha",
        power:'180cc'
    }
}


const poorhDeveloper :Developer<withoutBrand>={
    name:'tanjil',
    salay:33,
    device:{
        brand:'korola',
        model:2002,
        releasedYear:2010

    },
    smartWatch:{
        heartRate:'22rate',
        stopWatch:true
    },
    
}
