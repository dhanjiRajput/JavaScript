let total=0;
let sub_total=0;
let g_total=0;
//Import Navbar From Components Js File
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


//Show Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const handledelete=(index)=>{
    cart.splice(index,1);
    mapper(cart);
    localStorage.setItem("cart",JSON.stringify(cart));   
}

const handleqty=(index,oper)=>{
    if(oper=="+"){
        cart[index].qty+=1;
    }else{
        if(cart[index].qty>1){
            cart[index].qty-=1;
        }else{
            alert("IF your quantity Lesser than 1,Product will remove from cart...");
            handledelete(index);
        }
    }
    mapper(cart);
    localStorage.setItem("cart",JSON.stringify(cart));
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
        btn1.addEventListener("click",()=>handleqty(index,"-"));

        let btn2=document.createElement("button");
        btn2.innerHTML=item.qty;
        let btn3=document.createElement("button");
        btn3.innerHTML="+";
        btn3.addEventListener("click",()=>handleqty(index,"+"));

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

mapper(cart);

const count=(e)=>{

    e.preventDefault();
    let coupen=document.getElementById("coupen").value;

    let apply=(g_total*coupen)/100;

    total=g_total-apply;
   
    document.getElementById("total").innerHTML=total;
}
document.getElementById("voucher").addEventListener("submit",count);