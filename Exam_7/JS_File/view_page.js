// Import Navbar from Components File
import getvalue, { createTag } from "../Components/get_value.js";
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
    localStorage.removeItem("IsLogin");
    window.location.href = "/Exam_7/Pages/login.html";
})

//Data Fetch from Localstorage

let index=localStorage.getItem("index");
let places=JSON.parse(localStorage.getItem("places")) ||[];

let img1=createTag("img",places[index].img1);
document.getElementById("img11").append(img1);
img1.setAttribute("class","slide_img");

let img2=createTag("img",places[index].img2);
document.getElementById("img22").append(img2);
img2.setAttribute("class","slide_img");

let img3=createTag("img",places[index].img3);
document.getElementById("img33").append(img3);
img3.setAttribute("class","slide_img");

let title=createTag("h5",`Title : ${places[index].title}`);
let price=createTag("h6",`Price : ${places[index].price}`);
let like=createTag("h6",`Like   : ${places[index].qty}`);

let buy=createTag("button","Buy Package");
buy.setAttribute("class","btn btn-primary")
buy.addEventListener("click",()=>{
    alert("Congrats....You Booked This package Successfully...");
})

let box=document.createElement("div");
box.append(title,price,like,buy);
box.setAttribute("id","box");

document.getElementById("show_data").append(box);

const handlecomment=(e)=>{
    e.preventDefault();

    let data=document.getElementById("input_comment").value;

    places[index].comment=data;
    localStorage.setItem("places",JSON.stringify(places));
    location.reload();
}

document.getElementById("comments").addEventListener("submit",handlecomment);

const ui=()=>{
    document.getElementById("com").innerHTML=places[index].comment; 
}
ui();

