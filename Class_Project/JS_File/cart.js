
//Import Navbar From Components Js File
import navbar from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



//IF not login send him to login page
let user = JSON.parse(localStorage.getItem("user"));
let IsLogin = localStorage.getItem("IsLogin") || false;


if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {

    window.location.href = "/Class_Project/Pages/login.html";
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("IsLogin", false);
    window.location.href = "/Class_Project/Pages/login.html";
})


//Show Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cart);
const mapper=(data)=>{
    document.getElementById("list").innerHTML="Loading Data.....";

    data.map((item)=>{
        let img=document.createElement("img");
        img.src=item.img;
        img.setAttribute("id","cart_img");
        let td1=document.createElement("td");
        td1.append(img);

        let td2=document.createElement("td");
        td2.innerHTML=item.title;
        let td3=document.createElement("td");
        td3.innerHTML=item.category;
        let td4=document.createElement("td");
        td4.innerHTML=item.price;

        let btn1=document.createElement("button");
        btn1.innerHTML="-";
        let btn2=document.createElement("button");
        btn2.innerHTML=item.qty;
        let btn3=document.createElement("button");
        btn3.innerHTML="+";
        let td5=document.createElement("td");
        td5.append(btn1,btn2,btn3);

        let td6=document.createElement("td");
        td6.innerHTML=item.price * item.qty;
        
        let btn4=document.createElement("button");
        btn4.innerHTML="Remove";
        let td7=document.createElement("td");
        td7.append(btn4);

        let tr1=document.createElement("tr");
        tr1.append(td1,td2,td3,td4,td5,td6,td7);

        document.getElementById("list").append(tr1);

    })
}

mapper(cart);