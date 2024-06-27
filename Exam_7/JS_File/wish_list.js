//Import Navbar from Components File
import navbar from "./Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

//IF not login send him to login page
let user = JSON.parse(localStorage.getItem("user"));
let IsLogin = localStorage.getItem("IsLogin") || false;


if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {

    window.location.href = "/Exam_7/Pages/login.html";
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("IsLogin", false);
    window.location.href = "/Exam_7/Pages/login.html";
})
