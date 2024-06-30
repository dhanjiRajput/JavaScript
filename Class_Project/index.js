
//Import Navbar From Component File
import navbar from "./Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//IF not login send him to login page
let user = JSON.parse(localStorage.getItem("user"));
let IsLogin = localStorage.getItem("IsLogin")||false;


if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {
    window.location.href = "/Class_Project/Pages/login.html";
}


document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    window.location.href = "/Class_Project/Pages/login.html";
})