
//Import Navbar from Components File
import getvalue, { createTag } from "./Components/get_value.js";
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


//Fetch Data From Local storage
let wish_list=JSON.parse(localStorage.getItem("wish"))||[];
let places=JSON.parse(localStorage.getItem("places")) ||[];

const Handleqty=(index)=>{
    places[index].qty+=1;
    mapper(places);
    localStorage.setItem("places",JSON.stringify(places));
}

const mapper=(data)=>{
    document.getElementById("show_places").innerHTML="";

    data.map((item,index)=>{
        
        let img1=createTag("img",item.img1);
        let div_img=document.createElement("div");
        div_img.append(img1);
        div_img.setAttribute("id","div_img");
        img1.setAttribute("id","img1");

        let title=createTag("h5",item.title);
        let price=createTag("h6",item.price);

        let like=createTag("div",`<i class="fa-solid fa-thumbs-up"></i>`);
        like.addEventListener("click",()=>Handleqty(index));
        let span1=createTag("span",item.qty);

        let div_like=document.createElement("div");
        div_like.append(like,span1);
        div_like.setAttribute("id","div_like")
        let wish=createTag("div",`<i class="fa-regular fa-heart"></i>`);
        like.setAttribute("id","btnn");
        wish.setAttribute("id","btnn");
        wish.addEventListener("click",()=>{
            wish_list.push(item);
            localStorage.setItem("wish",JSON.stringify(wish_list));
            alert("You Added this places to Your WIsh List...")
        })

        let div_btn=document.createElement("div");
        div_btn.append(div_like,wish);
        div_btn.setAttribute("id","div_btn");

        let box=document.createElement("div");
        box.append(div_img,title,price,div_btn);
        box.setAttribute("id","box");
        
        div_img.addEventListener("click",()=>{
            localStorage.setItem("index",index);
            window.location.href = "/Exam_7/Pages/view_page.html";
        })
        document.getElementById("show_places").append(box);
    })
}

mapper(places);

//Search By Filter
const handlelike=(like)=>{
    if(like=="ll"){
        let temp=places.sort((a,b)=>a.qty-b.qty);
        mapper(temp);
    }else{
        let temp=places.sort((a,b)=>b.qty-a.qty);
        mapper(temp);
    }
}

const handlecost=(like)=>{
    if(like=="lth"){
        let temp=places.sort((a,b)=>a.price-b.price);
        mapper(temp);
    }else{
        let temp=places.sort((a,b)=>b.price-a.price);
        mapper(temp);
    }
}

document.getElementById("ll").addEventListener("click",()=>handlelike("ll"));
document.getElementById("hl").addEventListener("click",()=>handlelike("hl"));
document.getElementById("lth").addEventListener("click",()=>handlecost("lth"));
document.getElementById("htl").addEventListener("click",()=>handlecost("htl"));
document.getElementById("all").addEventListener("click",()=>{
    mapper(places);
});


const handleSearch = (value) => {
    let temp = places.filter((ele) => ele.title.includes(value));
    mapper(temp);
}

const handleSearchData=(e)=>{
    e.preventDefault();

    let value=getvalue("search_input");
    handleSearch(value);
}

document.getElementById("search").addEventListener("submit", handleSearchData);