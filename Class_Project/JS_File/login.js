
//Import Navbar From Components
import navbar from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

//Import User Data from Local Storage
let getData=JSON.parse(localStorage.getItem("user"));

//Login User
const HandleData=(e)=>{
    e.preventDefault();

    let user={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }

    if(getData){
        if(getData.email!=user.email){
            alert("User Not Found.....");
        }else if(getData.password!=user.password){
            alert("Incorrect PassWOrd.....");
        }else{
            alert("Login SuccessFully....");
            localStorage.setItem("IsLogin",true);
            window.location.href="/Class_Project/index.html";
        }
    }else{
        alert("Sign UP first...");
        window.location.href="/Class_Project/Pages/sign_up.html";
    }
}
document.getElementById("login_data").addEventListener("submit",HandleData);