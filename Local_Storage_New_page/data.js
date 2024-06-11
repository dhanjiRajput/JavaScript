let products=JSON.parse(localStorage.getItem("products"))||[];


const delete_data=(index)=>{
    products.splice(index,1);
    uimaker();
    localStorage.setItem("products",JSON.stringify(products));
}

const uimaker=()=>{
    document.getElementById("products").innerHTML="";

    products.map((item,index)=>{
        let img=document.createElement("img");
        img.src=item.img;

        img.setAttribute("id","img");

        let h1=document.createElement("h1");
        h1.innerHTML=item.title;

        let h3=document.createElement("h3");
        h3.innerHTML=item.price;

        let btn1=document.createElement("button");
        btn1.innerHTML="Like";

        let btn2=document.createElement("button");
        btn2.innerHTML="Delete";

        btn2.addEventListener("click",()=>delete_data(index));

        let menu=document.createElement("div");
        menu.append(btn1,btn2);

        let box=document.createElement("div");
        box.append(img,h1,h3,menu);

        box.setAttribute("id","box");

        document.getElementById("products").append(box);
    })
}

uimaker();