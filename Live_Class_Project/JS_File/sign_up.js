//Import Navbar from Components Folder
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//Data Send to API & Local Storage
import { getvalue } from "../Components/helper.js";
import { User_API } from "../Components/API_Method.js";

const handledata = async (e) => {
    e.preventDefault();

    let data = {
        name: getvalue("name"),
        email: getvalue("email"),
        password: getvalue("password"),
    }

    const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let email = await User_API.get_email(data.email);
    if (email.length != 0) {
        alert("User Already Exist....");
    } else {
        if (validpassword.test(data.password)) {
            User_API.post(data);
            localStorage.setItem("IsLogin", true);
            localStorage.setItem("user", JSON.stringify(data));
            alert("User Registered Successfully....");
            window.location.href = "/Live_Class_Project/index.html";
        }else{
            document.getElementById("password").style.border = "2px solid red";
            window.navigator.vibrate(1000);
        }
    }
}
document.getElementById("sign_up").addEventListener("submit", handledata);