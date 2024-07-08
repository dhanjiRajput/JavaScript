import { create_tag, delete_method, get_method, patch_method, post_method } from "./method.js";

let id=-1;
document.getElementById("database").addEventListener("submit", (e) => {
    e.preventDefault();

    let products = {
        image: document.getElementById("image").value,
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
    }

    if(id==-1){
        post_method(products);
    }else{
        patch_method(products,id);
    }
});

const handleupdate=(item)=>{
        document.getElementById("image").value=item.image;
        document.getElementById("title").value=item.title;
        document.getElementById("price").value=item.price;
        document.getElementById("category").value=item.category;
        document.getElementById("submit").value="update";
        id=item.id;
}

const mapper = (data) => {
    document.getElementById("show_data").innerHTML = "";

    data.map((item) => {

        let image = create_tag("img", item.image);
        let image_div = document.createElement("div");
        image_div.append(image);

        let title = create_tag("h5", item.title);
        let price = create_tag("h6", item.price);
        let category = create_tag("h6", item.category);

        let buy=create_tag("button","Update");
        buy.addEventListener("click",()=>handleupdate(item));

        let delte=create_tag("button","Delete");
        delte.addEventListener("click",()=>{
            delete_method(item.id);
        })

        let btn_div=document.createElement("div");
        btn_div.append(buy,delte);

        let box = document.createElement("div");
        box.append(image_div,title,price,category,btn_div);

        document.getElementById("show_data").append(box);

        image_div.setAttribute("id","image_div");
        image.setAttribute("id","images");
        box.setAttribute("id","box");
        btn_div.setAttribute("id","btn_div");
    })
}

let data= await get_method();
mapper(data);

