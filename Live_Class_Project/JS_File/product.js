// Import Navbar From Componenet Folder
import { cart_API, products_API } from "../Components/API_Method.js";
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//IS Login true than SHow User Name Otherwise Redirect to Login Page
let user = JSON.parse(localStorage.getItem("user")) || [];
let IsLogin = JSON.parse(localStorage.getItem('IsLogin')) || false;

if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {
    window.location.href = "/Live_Class_Project/Pages/login.html";
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    window.location.href = "/Live_Class_Project/Pages/login.html";
})

//Add data To Cart
let get_cart=await cart_API.get();

const isExist=(id)=>{
    let temp=get_cart.filter((item)=>item.id==id)
    return temp.length>0? true:false;
}

const handlecart=(data)=>{
    if(isExist(data.id)){
        get_cart.map((item)=>{
            if(item.id==data.id){
                let d={
                    id:item.id,
                    img:item.img,
                    title:item.title,
                    price:item.price,
                    category:item.category,
                    qty:item.qty+=1,
                }
                cart_API.patch(d,item.id);
            }
        });
        alert("Quantity Added Successfully....");
    }else{
        cart_API.post({...data,qty:1});
        alert("Cart Added Successfully...");
    }
}


//get data from Products API
let get_data = await products_API.get();
const mapper = (data) => {
    document.getElementById("show_product").innerHTML = "";

    data.map((item,index) => {
        let product_img = document.createElement("img");
        product_img.src = item.img;
        let img_div = document.createElement("div");
        img_div.append(product_img);
        product_img.setAttribute("id", "product_img");
        img_div.setAttribute("id", "img_div");

        let title = document.createElement("h4");
        title.innerHTML = item.title;
        let price = document.createElement("h5");
        price.innerHTML = `Rs. ${item.price}`;
        let category = document.createElement("h5");
        category.innerHTML = `Category : ${item.category}`;

        let cart_btn = document.createElement("button");
        cart_btn.innerHTML = "Add To Cart";

        cart_btn.addEventListener("click", async () => handlecart(item));

        let btn_div = document.createElement("div");
        btn_div.append(cart_btn);
        cart_btn.setAttribute("id", "cart_btn");
        btn_div.setAttribute("id", "btn_div");

        let box = document.createElement("div");
        box.append(img_div, title, price, category, btn_div);
        box.setAttribute("id", "box");

        document.getElementById("show_product").append(box);
    })
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
document.getElementById("lth").addEventListener("click", () => handleprice("lth"));
document.getElementById("htl").addEventListener("click", () => handleprice("htl"));
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