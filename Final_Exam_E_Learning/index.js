//Import Navbar from Components Folder
import { course_api, dashboard_api } from "./Components/API_Method.js";
import { createTag } from "./Components/helper.js";
import { navbar } from "./Components/navbar.js";
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

//Display courses

let get_data=await course_api.get();
let dashboard=await dashboard_api.get();

const mapper=(data)=>{
    document.getElementById("show_data").innerHTML="";

    data.map((item)=>{
        let img=createTag("img",item.img);
        let img_div=document.createElement("div");
        img_div.append(img);
        img_div.setAttribute("id","img_div");
        img.setAttribute("id","course_img");

        let name=createTag("h6",item.name);
        let price=createTag("h6",`Course Fees : Rs. ${item.price}`);
        let seat=createTag("h6",`Left Seat : ${item.seat}`);

        let btn_buy=createTag("button","Buy Course");
        btn_buy.setAttribute("id","btn_buy");
        btn_buy.addEventListener("click",()=>{
            
            let flag=false;
            dashboard.map((it)=>{
                if(it.id==item.id){
                    flag=true;
                }
            })

            if(flag){
                alert("You Have Already Bought This Course.. To See Detalis Got to DashbOard")
            }else{
                dashboard_api.Post(item);
                window.open("/Final_Exam_E_Learning/Pages/dashboard.html");
            }
        })

        let box=document.createElement("div");
        box.append(img_div,name,price,seat,btn_buy);
        box.setAttribute("id","box");
        document.getElementById("show_data").append(box);
    });
}

mapper(get_data);