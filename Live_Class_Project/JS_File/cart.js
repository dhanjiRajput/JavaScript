let total=0;
let sub_total=0;
let g_total=0;
import { cart_API } from "../Components/API_Method.js";
// Import Navbar From Componenet Folder
import { navbar } from "../Components/navbar.js";
document.getElementById("navbar").innerHTML =navbar();

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

//show cart table

let get_cart=await cart_API.get();

const handledelete=(index)=>{
    cart_API.delete(index);
    mapper(get_cart);
}

const handleqty=(item,index,oper)=>{
    if(oper=="+"){
        let d={
            id:item.id,
            img:item.img,
            title:item.title,
            price:item.price,
            category:item.category,
            qty:item.qty+=1,
        }
        cart_API.patch(d,item.id);
    }else{
        if(get_cart[index].qty>0){
            let d={
                id:item.id,
                img:item.img,
                title:item.title,
                price:item.price,
                category:item.category,
                qty:item.qty-=1,
            }
            cart_API.patch(d,item.id);
        }else{
            handledelete(index);
        }
    }
    mapper(get_cart);
}

const mapper=(data)=>{
    document.getElementById("list").innerHTML="";

    data.map((item,index)=>{
        let img=document.createElement("img");
        img.src=item.img;
        img.setAttribute("id","cart_img");
        let td1=document.createElement("td");
        td1.append(img);

        let td2=document.createElement("td");
        td2.innerHTML=item.title;
        let td3=document.createElement("td");
        td3.innerHTML=item.category;
        let td4=document.createElement("td");
        td4.innerHTML=item.price;

        let btn1=document.createElement("button");
        btn1.innerHTML="-";
        btn1.addEventListener("click",()=>handleqty(item,index,"-"));

        let btn2=document.createElement("button");
        btn2.innerHTML=item.qty;
        let btn3=document.createElement("button");
        btn3.innerHTML="+";
        btn3.addEventListener("click",()=>handleqty(item,index,"+"));

        let td5=document.createElement("td");
        td5.append(btn1,btn2,btn3);

        let td6=document.createElement("td");
        td6.innerHTML=item.price * item.qty;
        
        let btn4=document.createElement("div");
        btn4.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        btn1.setAttribute("id","btnn");
        btn2.setAttribute("id","btnn");
        btn3.setAttribute("id","btnn");
        btn4.setAttribute("id","btnn");
        btn4.addEventListener("click",()=>handledelete(index));
        let td7=document.createElement("td");
        td7.append(btn4);

        let tr1=document.createElement("tr");
        tr1.append(td1,td2,td3,td4,td5,td6,td7);

        document.getElementById("list").append(tr1);

        sub_total=sub_total+item.price*item.qty;

        g_total=sub_total;

        document.getElementById("sub_total").innerHTML=sub_total;
        document.getElementById("total").innerHTML=sub_total;
    })
    sub_total=0;
}

mapper(get_cart);

document.getElementById("voucher").addEventListener("submit",(e)=>{
    e.preventDefault();
    let coupen=document.getElementById("coupen").value;

    let apply=(g_total*coupen)/100;

    total=g_total-apply;
   
    document.getElementById("total").innerHTML=total;
});