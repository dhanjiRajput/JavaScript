import getvalue from "../Components/helper.js";
import navbar from "../Components/navbar.js";
let userData = JSON.parse(localStorage.getItem("user"));
document.getElementById("navbar").innerHTML=navbar();

console.log(userData);
const handledata = (e) => {
    e.preventDefault();

    let user = {
        email: getvalue("email"),
        password: getvalue("password")
    }

    if(userData){
        if(userData.email!=user.email){
            alert("User Not Found...");
        }else if(userData.password!=user.password){
            alert("Incorrect Password...");
        }else{
            alert("Login Successfully...");
            localStorage.setItem("isLogin",true);
            window.location.href="/Class_Project/index.html";
        }
    }else{
        alert("Sign UP first to Login...");
        window.location.href="/Class_Project/Pages/sign_up.html";
    }

}
document.getElementById("login").addEventListener("submit", handledata);