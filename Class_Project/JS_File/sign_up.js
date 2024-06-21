
//Import Navbar From  Components
import navbar from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


//Fetch Data From Sign UP Form
const HandleData=(e)=>{
    e.preventDefault();

    let user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }

    localStorage.setItem("user",JSON.stringify(user));
    localStorage.setItem("IsLogin",true);
    alert("New User Registered Successfully...");
    window.location.href="/Class_Project/index.html";
}
document.getElementById("sign_up").addEventListener("submit",HandleData);