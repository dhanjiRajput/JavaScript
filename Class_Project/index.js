import navbar from "./Components/navbar.js";
import getvalue from "./Components/helper.js";
let isLogin=localStorage.getItem("isLogin")||false;
document.getElementById("navbar").innerHTML=navbar()
let getData=JSON.parse(localStorage.getItem("user"));

if(isLogin){
    document.getElementById("navbar").innerHTML=navbar("Log Out",getData.username);
}
else{
    window.location.href="/Class_Project/Pages/login.html";
}

const handledata=(e)=>{
    e.preventDefault();

    isLogin=false;
}
document.getElementById("login").addEventListener("click",handledata);