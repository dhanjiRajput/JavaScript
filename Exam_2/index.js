const push_data=[];

const delete_one_cart=(index)=>{
    push_data.splice(index,1);
    uimaker();
}

const uimaker=()=>{
    document.getElementById("cart").innerHTML="";

    push_data.map((item,index)=>{

        let image1=document.createElement("img");
        image1.src=item.image;

        image1.setAttribute("id","cart_img");

        let title1=document.createElement("p");
        title1.innerHTML=item.title;

        let price1=document.createElement("p");
        price1.innerHTML=item.price;

        
        let btn1=document.createElement("button");
        btn1.innerHTML="Buy Now";
        btn1.setAttribute("id","btn1");
        btn1.setAttribute("class","bt");

        let btn2=document.createElement("button");
        btn2.innerHTML="DELETE";
        btn2.setAttribute("id","btn2");
        btn2.setAttribute("class","bt");

        let div2=document.createElement("div");

        div2.append(btn1,btn2);

        let div1=document.createElement("div");
    
        div1.setAttribute("id","box")

        div1.append(image1,title1,price1,div2);

        document.getElementById("cart").append(div1);
        
        btn2.addEventListener("click",()=>delete_one_cart(index));

        btn1.addEventListener("click",()=>{
            alert("You added your cart");
        })
    })
}

const handledata=(e)=>{
    e.preventDefault();

    let input_data={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        image:document.getElementById("image").value
    }

    push_data.push(input_data);
    console.log(push_data);
    uimaker();
}

document.getElementById("data").addEventListener("submit",handledata);
let min=29;
let sec=59;

let id=setInterval(()=>{
    document.getElementById("timer").innerHTML=` Sale End In - ${min} : ${sec}`;
    sec=sec-1;
    if(min==0 && sec==0){
        document.getElementById("timer").innerHTML=`Sale End In - ${min} : ${sec}`;
        clearInterval(id);
        document.getElementById("cart").innerHTML=`<h1>Sale Over</h1>`;
    }
    if(sec==0){
        min=min-1;
        sec=59;
    }
},1000);