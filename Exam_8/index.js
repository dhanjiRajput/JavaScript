import createTag from "./Components/helper.js";

const getdata=async()=>{
    let req=await fetch("https://dummyjson.com/products");
    let res=await req.json();
    mapper(res.products);

    document.getElementById("lth").addEventListener("click",()=>{
        let temp=(res.products).sort((a,b)=>a.price-b.price);
        mapper(temp);
    })

    document.getElementById("htl").addEventListener("click",()=>{
        let temp=(res.products).sort((a,b)=>b.price-a.price);
        mapper(temp);
    })

    document.getElementById("all").addEventListener("click",()=>{
        mapper(res.products);
    })

    document.getElementById("search").addEventListener("submit",(e)=>{
        e.preventDefault();
        let value=document.getElementById("search_input").value
        let temp=(res.products).filter((ele)=>ele.category.includes(value));
        mapper(temp);
    })

    document.getElementById("search1").addEventListener("submit",(e)=>{
        e.preventDefault();
        let value=document.getElementById("search_input1").value
        let temp=(res.products).filter((ele)=>ele.title.includes(value));
        mapper(temp);
    })
}
getdata();

const mapper=(data)=>{
    document.getElementById("show_api_data").innerHTML="";
    data.map((item,i)=>{
        let product_img=createTag("img",item.thumbnail);
        let img_div=document.createElement("div");
        img_div.append(product_img);
        img_div.setAttribute("id","img_div");

        let title=createTag("h6",item.title);
        let price=createTag("h6",item.price);
        let category=createTag("h6",item.category);

        let box=document.createElement("div");
        box.append(img_div,title,price,category);
        box.setAttribute("id","box");

        box.addEventListener("click",()=>{
            localStorage.setItem("key",item.id);

            console.log(item.id);
            window.location.href="/view_page.html";
        })
        document.getElementById("show_api_data").append(box);
    })
}
