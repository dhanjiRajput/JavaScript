
//Import Navbar from Components
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
    localStorage.setItem("IsLogin", false);
    window.location.href = "/Class_Project/Pages/login.html";
})


//Fetch Data from the Add Product Page
let products = JSON.parse(localStorage.getItem("product")) || [];
const HandleData=(e)=>{
    e.preventDefault();

    let product={
        img:document.getElementById("img").value,
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        category:document.getElementById("category").value,
        id:products.length==0 ? 1 : products[products.length-1].id+1,
    }

    products.push(product);
    localStorage.setItem("product",JSON.stringify(products));
    alert("Product Added Successfully...");
    // document.getElementById("add_product").reset();
}
document.getElementById("add_product").addEventListener("submit",HandleData);