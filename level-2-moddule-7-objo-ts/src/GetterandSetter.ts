// getter 

// setter 


class BankAccount{
    readonly userId:number;
    userNAme:string;
//    private userBalance:number; //privet vs protected
      protected userBalance:number; //privet vs protected

    constructor(userId:number, userName:string,userBalance:number){
        this.userId=userId;
        this.userNAme = userName;
        this.userBalance = userBalance;
    }


// //balance k set kortese 
//     addBalance(balance:number){
    //         this.userBalance =this.userBalance+balance
    //     }
    
    // // get korbo 
    // getBalance(){
    //     return this.getBalance;
    // }

// now we are using set 
set addBalance(ammount:number){
    this.userBalance = this.userBalance+ammount*ammount;
}



    // we are using now getter 
    get getBalance(){
        return this.userBalance
    }
}
 

const tanjilAccount = new BankAccount(2212,'tanjil',10)

 

//   tanjilAccount.addBalance(10)  // fungtion call korte hocche
// console.log(tanjilAccount.getBalance())

tanjilAccount.addBalance = 10
 
console.log(tanjilAccount)
 