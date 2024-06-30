
//Import Navabar From Components
import navbar from "../Components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();



//IF not login send him to login page
let user = JSON.parse(localStorage.getItem("user"));
let IsLogin = localStorage.getItem("IsLogin") || false;


if (IsLogin) {
    document.getElementById("navbar").innerHTML = navbar("Log Out", user.name);
} else {

    window.location.href = "/Class_Project/Pages/login.html";
}

document.getElementById("login").addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("IsLogin");
    window.location.href = "/Class_Project/Pages/login.html";
})


//Logic For Add to Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const ISExist=(id)=>{
    let temp=cart.filter((ele)=>ele.id==id);
    return temp.length>0 ? true : false;
}

const HandleCart=(item)=>{
    if(ISExist(item.id)){
        cart.map((ele,index)=>{
            if(ele.id==item.id){
                cart[index].qty+=1;
            }
        })
        alert("Quantity Added to Cart....");
    }else{
        cart.push({...item,qty:1});
        alert("Added Cart Successfully...");
    }
    localStorage.setItem("cart",JSON.stringify(cart));
}


//Fetch Product Data From Localstorage
let product_data=JSON.parse(localStorage.getItem("product"))||[];

const mapper=(data)=>{
    document.getElementById("show_product").innerHTML="";

    data.map((item)=>{
        let product_img=document.createElement("img");
        product_img.src=item.img;
        let img_div=document.createElement("div");
        img_div.append(product_img);
        product_img.setAttribute("id","product_img");
        img_div.setAttribute("id","img_div");

        let title=document.createElement("h4");
        title.innerHTML=item.title;
        let price=document.createElement("h5");
        price.innerHTML=item.price;
        let category=document.createElement("h5");
        category.innerHTML=item.category;

        let cart_btn=document.createElement("button");
        cart_btn.innerHTML="Add To Cart";

        cart_btn.addEventListener("click",()=>HandleCart(item));

        let btn_div=document.createElement("div");
        btn_div.append(cart_btn);
        cart_btn.setAttribute("id","cart_btn");
        btn_div.setAttribute("id","btn_div");

        let box=document.createElement("div");
        box.append(img_div,title,price,category,btn_div);
        box.setAttribute("id","box");

        document.getElementById("show_product").append(box);
    })
}

mapper(product_data);

//Filter Search
const HandleSort=(sort)=>{
    if(sort=="lth"){
        let temp=product_data.sort((a,b)=>a.price-b.price);
        mapper(temp);
    }else{
        let temp=product_data.sort((a,b)=>b.price-a.price);
        mapper(temp);
    }
}

document.getElementById("lth").addEventListener("click",()=>HandleSort("lth"));
document.getElementById("htl").addEventListener("click",()=>HandleSort("htl"));
document.getElementById("all").addEventListener("click",()=>{
    mapper(product_data);
});

const HandleCategory=(category)=>{
    let temp=product_data.filter((ele)=>ele.category==category);
    mapper(temp);
}
document.getElementById("men").addEventListener("click",()=>HandleCategory("men"));
document.getElementById("women").addEventListener("click",()=>HandleCategory("women"));


const search_data=(data)=>{
    let temp=product_data.filter((ele)=>ele.title.includes(data));
    mapper(temp);
}
const handleSearch=(e)=>{
    e.preventDefault();

    let searchvalue=document.getElementById("search_input").value;
    search_data(searchvalue);
}
const handleSearchdata=(e)=>{
    e.preventDefault();

    let searchvalue=document.getElementById("search_input").value;
    search_data(searchvalue);
}
document.getElementById("search").addEventListener("keypress",handleSearch);
document.getElementById("search").addEventListener("submit",handleSearchdata);

