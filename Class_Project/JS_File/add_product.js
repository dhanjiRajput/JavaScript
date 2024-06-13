import getvalue from "../Components/helper.js";
import navbar from "../Components/navbar.js";
let isLogin=localStorage.getItem("isLogin")||false;
document.getElementById("navbar").innerHTML=navbar
let getData=JSON.parse(localStorage.getItem("user"));

if(isLogin){
    document.getElementById("navbar").innerHTML=navbar("Log Out",getData.username);
}
else{
    window.location.href="/Class_Project/Pages/login.html";
}
const handle=(e)=>{
    e.preventDefault();

    isLogin=false;
}
document.querySelector(".login").addEventListener("click",handle);

let push_data=[];
const handledata=(e)=>{
    e.preventDefault();

    let product={
        title:getvalue("title"),
        img:getvalue("img"),
        category:getvalue("category"),
        price:getvalue("price"),
    }
    
    push_data.push(product);
    localStorage.setItem("product",JSON.stringify(push_data));
}
document.getElementById("add_product").addEventListener("submit",handledata);

