class Account{
    #name
    #amount
    constructor(){
        this.#name="xyz"
        this.#amount=0;
    }

    setname(name){
        this.#name=name;
    }

    getname(){
        console.log(this.#name);
    }

    deposit(amount){
        if(amount>0){
            this.#amount+=amount;
            console.log("Total Balance is :",this.#amount);
        }
    }

    #isvalidwithdraw(amount){
        if(amount>0){
            if(this.#amount>=amount){
                this.#amount-=amount;
                console.log("CLear Balance is :",this.#amount);
            }else{
                console.log("Not having Sufficient Balance to Withdraw....!");
            }
        }else{
            console.log("Witdraw Amount Must be Greater than..!");
        }
    }

    withdraw(amount){
        if(this.#isvalidwithdraw(amount)){
            return true;
        }else{
            return false;
        }
    }

    checkBalance(){
         console.log("Available Balance Is :",this.#amount);
    }
};

let ac=new Account();
ac.setname("abc")
ac.getname();
ac.deposit(1000);
ac.deposit(5000000);
ac.withdraw(1000);
ac.deposit(100);
ac.withdraw(5000100);
ac.withdraw(100);
ac.checkBalance();

ac.deposit(1000);
ac.withdraw(500);
