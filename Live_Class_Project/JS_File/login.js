//Import Navbar from Components Folder
import { getvalue } from "../Components/helper.js";
import { navbar } from "../Components/navbar.js";


let user=JSON.parse(localStorage.getItem("user"))||[];
document.getElementById("navbar").innerHTML=navbar();
const handledata=(e)=>{
    e.preventDefault();

    let data={
        email:getvalue("email"),
        password:getvalue("password"),
    }
}
document.getElementById("login_data").addEventListener("submit",handledata);