// Import Navbar From Componenet Folder
import { navbar } from "./Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

// //IS Login true than SHow User Name Otherwise Redirect to Login Page
// let user=JSON.parse(localStorage.getItem("user"))||[];
// let IsLogin=JSON.parse(localStorage.getItem('IsLogin'))||false;

// if(IsLogin){
//     document.getElementById("navbar").innerHTML=navbar("Log Out",user.name);
// }else{
//     window.location.href="/Live_Class_Project/Pages/login.html";
// }

// document.getElementById("login").addEventListener("click",(e)=>{
//     e.preventDefault();
//     localStorage.removeItem("IsLogin");
//     window.location.href="/Live_Class_Project/Pages/login.html";
// })