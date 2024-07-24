//Import Navbar from Components Folder
import { User_API } from "../Components/API_Method.js";
import { getvalue } from "../Components/helper.js";
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let user=JSON.parse(localStorage.getItem("user"))||[];

const handledata=async (e)=>{
    e.preventDefault();

    let data={
        email:getvalue("email"),
        password:getvalue("password"),
    }

    let email=await User_API.get_email(data.email);
    
    if(email.length==0){
        alert("User Not Found.....");
        window.location.href="/Final_Exam_E_Learning/Pages/sign_up.html";
    }else if(email[0].password!=data.password){
        alert("Incorrect Password...");
    }else{
        alert("Login Successfully...");
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("IsLogin",true);
        window.location.href="/Final_Exam_E_Learning/index.html";
    }
}
document.getElementById("login_data").addEventListener("submit",handledata);