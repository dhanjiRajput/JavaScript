//Import Navbar from Components Folder
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//Data Send to API & Local Storage
import { getvalue } from "../Components/helper.js";
import { User_API } from "../Components/API_Method.js";
let user = JSON.parse(localStorage.getItem("user")) || [];
const handledata = (e) => {
    e.preventDefault();

    let data = {
        name: getvalue("name"),
        email: getvalue("email"),
        password: getvalue("password"),
    }

    user.push(data);
    User_API.post(data);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("IsLogin", true);
    window.location.href = "/Live_Class_Project/index.html";
}
document.getElementById("sign_up").addEventListener("submit", handledata);

