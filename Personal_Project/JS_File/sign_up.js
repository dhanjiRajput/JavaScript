
//Import Navbar From  Components
import { getvalue } from "../Components/helper.js";
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


//Fetch Data From Sign UP Form
const HandleData = (e) => {
    e.preventDefault();

    let user = {
        name: getvalue("name"),
        email: getvalue("email"),
        password: getvalue("password"),
    }

    const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (validpassword.test(user.password)) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("IsLogin", true);
        alert("New User Registered Successfully...");
        window.location.href = "/Personal_Project/index.html";
        document.getElementById("password").classList.remove(`error`);
        document.getElementById("password").style.border = "2px solid green";
    } else {
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("password").classList.add(`error`);
    }
}
document.getElementById("sign_up").addEventListener("submit", HandleData);