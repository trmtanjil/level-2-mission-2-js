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

    addBalance(balance:number){
        this.userBalance =this.userBalance+balance
    }
}
class studenAccount extends BankAccount{
    test(){
        this.
    }
}

const tanjilAccount = new BankAccount(2212,'tanjil',10)

// tanjilAccount.userId = 2222; // readonly 


// tanjilAccount.userBalance =1000;//only acches 
tanjilAccount.addBalance(1222) 
console.log(tanjilAccount)
console.log(tanjilAccount)