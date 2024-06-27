
//Import Navbar from Components File
import navbar from "../Components/navbar.js";
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

//Send Data To Local Storage
let push_data=JSON.parse(localStorage.getItem("places")) ||[];
import getvalue from "../Components/get_value.js";
const HandleData=(e)=>{
    e.preventDefault();

    let data={
        img1:getvalue("img1"),
        img2:getvalue("img2"),
        img3:getvalue("img3"),
        title:getvalue("title"),
        price:getvalue("price"),
        qty:0
    }

    push_data.push(data);
    localStorage.setItem("places",JSON.stringify(push_data));
    alert("Added Successfully......");
}
document.getElementById("add_places").addEventListener("submit",HandleData);