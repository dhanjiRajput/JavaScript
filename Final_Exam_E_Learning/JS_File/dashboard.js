
//Import Navbar from Components Folder
import { dashboard_api } from "../Components/API_Method.js";
import { createTag } from "../Components/helper.js";
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

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

//Data Fect From Buy

//Display courses

let dashboard=await dashboard_api.get();

const mapper=(data)=>{
    document.getElementById("show_data").innerHTML="";

    data.map((item)=>{
        let img=createTag("img",item.img);
        let img_div=document.createElement("div");
        img_div.append(img);
        img_div.setAttribute("id","img_div");
        img.setAttribute("id","course_img");

        let name=createTag("h4",item.name);
        let price=createTag("h6",`Course Fees : Rs. ${item.price}`);
        let topic=createTag("h6",`Topic : ${item.topic}`);
        let st=createTag("h6",`Sub Topic Of Course : ${item.sub}`);

        let box1=document.createElement("div");
        box1.append(name,price,topic,st);
        box1.setAttribute("id","box1")
    
        let box=document.createElement("div");
        box.append(img_div,box1);
        box.setAttribute("id","box");
        document.getElementById("show_data").append(box);
    });
}

mapper(dashboard);