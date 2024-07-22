//Import from COmponenets Folder
import { cart_API, product_API } from "./Components/API_Method.js";
import { createTag } from "./Components/helper.js";
import { navbar } from "./Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//IS Login true than SHow User Name Otherwise Redirect to Login Page
let user = JSON.parse(localStorage.getItem("user")) || [];
let IsLogin = JSON.parse(localStorage.getItem('IsLogin')) || false;

if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {
    window.location.href = "/Final_Exam_Food_Corner/Pages/login.html";
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    window.location.href = "/Final_Exam_Food_Corner/Pages/login.html";
})

//Push Data to  Cart 
let cart = await cart_API.get();

const isExist = (id) => {
    let temp = cart.filter((item) => item.id == id)
    return temp.length > 0 ? true : false;
}
let ci=localStorage.getItem("city");
const handlecart = (data) => {

    if(ci==data.city)
    {
        if(isExist(data.id)){
            cart.map((item)=>{
                if(item.id==data.id){
                    let da = {
                        id: item.id,
                        name: item.name,
                        tags: [
                            item.tags[0],
                            item.tags[1],
                        ],
                        image:item.image,
                        rating:item.rating,
                        mealType: [
                            item.mealType[0],
                        ],
                        city: item.city,
                        price:item.price,
                        category:item.category,
                        qty:item.qty+=1,
                    }
                    cart_API.patch(da,item.id);
                }
            });
            alert("Quantity Added Successfully...");
        }else{
            cart_API.post({...data,qty:1});
        alert("Cart Added Successfully...");
        }
    }else{
        alert("Unable to Add Cart U are Out of Location for Dellivery.");
    }
}


//Fetch Data From API
let get_data = await product_API.get();
const mapper = (data) => {
    document.getElementById("show_data").innerHTML = "";
    document.getElementById("city").innerHTML = "";

    data.map((item) => {
        let picture = createTag("img", item.image);
        let picture_div = document.createElement("div");
        picture_div.append(picture);
        picture_div.setAttribute("id", "picture_div");
        picture.setAttribute("id", "picture");

        let title = createTag("h6", item.name);
        let price = createTag("h6", `Rs. ${item.price}`);
        let category = createTag("h6", `Category : ${item.category}`);
        let rating = createTag("h6", `Ratings : <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> ${item.rating}`);

        let btn_cart = createTag("button", "Add To Cart");
        btn_cart.addEventListener("click", () => handlecart(item));
        let btn_div = document.createElement("div");
        btn_div.append(btn_cart);
        btn_cart.setAttribute("id", "btn_cart");
        btn_div.setAttribute("id", "btn_div");

        let box = document.createElement("div");
        box.append(picture_div, title, price, category, rating, btn_div);
        box.setAttribute("id", "box");

        document.getElementById("show_data").append(box);
    });
}
mapper(get_data);

//Filter Data By Search
const handleprice = (sort) => {
    if (sort == "lth") {
        let temp = get_data.sort((a, b) => a.price - b.price);
        mapper(temp);
    } else {
        let temp = get_data.sort((a, b) => b.price - a.price);
        mapper(temp);
    }
}

const handlerate = (sort) => {
    if (sort == "lth") {
        let temp = get_data.sort((a, b) => a.rating - b.rating);
        mapper(temp);
    } else {
        let temp = get_data.sort((a, b) => b.rating - a.rating);
        mapper(temp);
    }
}
document.getElementById("low").addEventListener("click", () => handleprice("lth"));
document.getElementById("high").addEventListener("click", () => handleprice("htl"));
document.getElementById("rl").addEventListener("click", () => handlerate("lth"));
document.getElementById("rh").addEventListener("click", () => handlerate("htl"));
document.getElementById("all").addEventListener("click", () => {
    mapper(get_data);
});

const handlecategory = (e) => {
    e.preventDefault();
    let search = document.getElementById("search_input").value
    let temp = get_data.filter((item) => item.category.includes(search));
    mapper(temp);
}
document.getElementById("search").addEventListener("submit", handlecategory);

document.getElementById("city_search").addEventListener("input",()=>{
    let c=document.getElementById("city_search").value
    let temp=get_data.filter((ele)=>ele.city.includes(c));
    mapper(temp);
})

//Get Location
const getweatherlocation=async(lat,long)=>{
    let req = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`)
    let res = await req.json()
    let ci=res.address.city;
    document.getElementById("city").append(res.address.city);
    localStorage.setItem("city",ci);
}
const getlocation=()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        let long=position.coords.longitude;
        let lat=position.coords.latitude;
        getweatherlocation(lat,long);
    })
}
getlocation();

