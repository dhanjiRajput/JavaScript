//Import Navbar from Components Folder
import { course_api } from "../Components/API_Method.js";
import { getvalue } from "../Components/helper.js";
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//IS Login true than SHow User Name Otherwise Redirect to Login Page
let user = JSON.parse(localStorage.getItem("user")) || [];
let IsLogin = JSON.parse(localStorage.getItem('IsLogin')) || false;

if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {
    window.location.href = "/Final_Exam_E_Learning/Pages/login.html";
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    window.location.href = "/Final_Exam_E_Learning/Pages/login.html";
})


//get Data from Input
const handledatable = (e) => {
    e.preventDefault();

    let data = {
        img: getvalue("img"),
        name: getvalue("name"),
        price: getvalue("price"),
        seat: getvalue("seat"),
        topic: getvalue("topic"),
        sub: [],
    };

    // Loop through all elements with the name 'myInputs[]' to get sub-topics
    document.querySelectorAll('input[name="myInputs[]"]').forEach(input => {
        data.sub.push(input.value);
    });

    if (user.role == "User") {
        alert("You Are Not Authorized Person to Add Data")
    } else {
        console.log(data);
        course_api.Post(data);
        alert("Added Successfully....");
    }
}

document.getElementById("add_course").addEventListener("submit", handledatable);
