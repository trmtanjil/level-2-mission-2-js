// conditional type : je type cnditon er upor nirvorsheel 

type A = null ;
type B = undefined;

type C = A extends number ?true: B extends undefined ? true:false;


type RichPeopleVehicale ={
    bike:string;
    car:string;
    ship:string;
}

// type checkVehecle <T> =T extends 'bike'|'car'|'ship'?true :false;

type checkVehecle <T> =T extends keyof RichPeopleVehicale?true :false;
type haseSome = checkVehecle<'bike'>