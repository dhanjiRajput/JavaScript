class Bank {
    #account_no
    #account_name
    #number
    #address
    #amount
    constructor(account_no, account_name, number, address) {
        this.#account_no = account_no;
        this.#account_name = account_name;
        this.#number = number;
        this.#address = address;
        this.#amount = 0;
    }

    setdetails(account_no, account_name, number, address) {
        this.#account_no = account_no;
        this.#account_name = account_name;
        this.#number = number;
        this.#address = address;
    }

    getdetails() {

        document.getElementById("show_data").innerHTML = "";

        let div1 = document.createElement("div");
        div1.innerHTML = this.#account_no

        let div2 = document.createElement("div");
        div2.innerHTML = this.#account_name

        let div3 = document.createElement("div");
        div3.innerHTML = this.#number

        let div4 = document.createElement("div");
        div4.innerHTML = this.#address

        document.getElementById("show_data").append(div1, div2, div3, div4);
    }

    deposit(money) {
        if (money > 0) {
            this.#amount += Number(money);
            alert("Money Deposited Successfully..");
        } else {
            alert("Enter Amount Greater Than Zero...");
        }
    }

    #isvalid(money) {
        if (money > 0) {
            if (this.#amount >= money) {
                this.#amount -= money;
            } else {
                alert("You Don't Have Sufficient Balance To Withdraw Money.....");
            }
        } else {
            alert("Withdraw Money Must Be Greater Than Zero..");
        }
    }

    withdraw(money) {
        if (isvalid(money)) {
            return true;
        } else {
            return false;
        }
    }

    getdata() {
        return this.#amount;
    }
}

let bnk = new Bank();


document.getElementById("deposit_balance").addEventListener("click", () => {

    let dp = document.getElementById("deposit_bl").value

    bnk.deposit(dp);
})

document.getElementById("check_balance").addEventListener("click", () => {

    let pas = "dk";

    let p = prompt("To Check Balance Enter Password..");
    if (pas == p) {
        document.getElementById("check").innerHTML = bnk.getdata();
    } else {
        alert("Enter Your Correct Password");
    }

})

const handledata = (e) => {
    e.preventDefault();


    let account_no = document.getElementById("account_no").value
    let account_name = document.getElementById("account_name").value
    let number = document.getElementById("number").value
    let address = document.getElementById("address").value

    bnk.setdetails(account_no, account_name, number, address);
    bnk.getdetails();
}
document.querySelector("#data").addEventListener("submit", handledata);