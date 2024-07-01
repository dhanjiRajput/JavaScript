import createTag from "./Components/helper.js";

let key=localStorage.getItem("key");

const getdata=async(id)=>{
    let req=await fetch(`https://dummyjson.com/products/${id}`);
    let res=await req.json();
    mapper(res);
}
getdata(key);

const mapper=(data)=>{
    let product_img=createTag("img",data.thumbnail);
    let title=createTag("h6",data.title);
    let price=createTag("h6",`Rs. ${data.price}`);
    let category=createTag("h6",`Category : ${data.category}`);
    let rating=createTag("h6",`Rating : <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>${data.rating}`);
    let stock=createTag("h6",`In Stock : ${data.stock}`);
    let brand=createTag("h6",`Brand : ${data.brand}`);
    let available=createTag("h6",`Availability : ${data.availabilityStatus}`);

    let box=document.createElement("div");
    box.append(product_img,title,price,category,rating,stock,brand,available);
    box.setAttribute("id","box");

    document.getElementById("show_api_data").append(box);

    data.reviews.map((item)=>{
        let rate=createTag("h6",`Ratings : <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>${item.rating}`);
        let comment=createTag("p",item.comment);
        let date=createTag("h6",item.date);

        let box1=document.createElement("div");
        box1.append(comment,rate,date);
        box1.setAttribute("id","box1");

        document.getElementById("show").append(box1);
    }) 
}
