class Bank{
    #account_no
    #account_name
    #number
    #address
    #amount
    constructor(account_no,account_name,number,address){
        this.#account_no=account_no;
        this.#account_name=account_name;
        this.#number=number;
        this.#address=address;
        this.#amount=0;
    }

    deposit(money){
        if(money>0){
            this.#amount+=Number(money);
            alert("Money Deposited Successfully..");
        }else{
            alert("Enter Amount Greater Than Zero...");
        }
    }

    #isvalid(money){
        if(money>0){
            if(this.#amount>=money){
                this.#amount-=money;
            }else{
                alert("You Don't Have Sufficient Balance To Withdraw Money.....");
            }
        }else{
            alert("Withdraw Money Must Be Greater Than Zero..");
        }
    }

    withdraw(money){
        if(isvalid()){
            return true;
        }else{
            return false;
        }
    }

    getdata(){
        return this.#amount;
    }
}

let bnk=new Bank();


document.getElementById("deposit_balance").addEventListener("click",()=>{

    let dp=document.getElementById("deposit_bl").value

    bnk.deposit(dp);
})

document.getElementById("check_balance").addEventListener("click",()=>{

    let pas="dk";

    let p=prompt("To Check Balance Enter Password..");
    if(pas==p){
        document.getElementById("check").innerHTML=bnk.getdata();
    }else{
        alert("Enter Your Correct Password");
    }
    
})

let push_data=[];
const ui=()=>{
    document.getElementById("show_data").innerHTML="";

    push_data.map((item)=>{

        let div1=document.createElement("div");
        div1.innerHTML=item.account_no;
    
        let div2=document.createElement("div");
        div2.innerHTML=item.account_name;
    
        let div3=document.createElement("div");
        div3.innerHTML=item.number;
    
        let div4=document.createElement("div");
        div4.innerHTML=item.address;

        document.getElementById("show_data").append(div1,div2,div3,div4);

    })
}
const handledata=(e)=>{
    e.preventDefault();

    let input_data={
        account_no:document.getElementById("account_no").value,
        account_name:document.getElementById("account_name").value,
        number:document.getElementById("number").value,
        address:document.getElementById("address").value,
    }

    push_data.push(input_data);

    ui();
}
document.querySelector("#data").addEventListener("submit",handledata);