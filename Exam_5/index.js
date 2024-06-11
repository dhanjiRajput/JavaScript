let push_data = JSON.parse(localStorage.getItem("push_data")) || [];
let user = JSON.parse(localStorage.getItem("user"));
let count=localStorage.getItem("count")||0;
let count1=localStorage.getItem("count1")||0;
const uimaker = () => {

    document.getElementById("show_data").innerHTML = "";
    push_data.map((item,index) => {
        let img = document.createElement("img");
        img.src = item.img;
        img.setAttribute("id", "img");

        let img_div = document.createElement("div");
        img_div.setAttribute("id", "news_img_div");
        img_div.append(img);

        let title = document.createElement("h6");
        title.innerHTML = `News Title : ${item.title}`;

        let description = document.createElement("p");
        description.innerHTML = `Description : ${item.description}`;

        let country = document.createElement("h6");
        country.innerHTML = item.country;

        let btn1= document.createElement("button");
        btn1.innerHTML="LIKE";
        btn1.setAttribute("id","btn");

        let span=document.createElement("span");
        span.innerHTML=` - ${localStorage.getItem("count")}`;
        btn1.addEventListener("click",()=>{
            count++;
            localStorage.setItem("count",count);
            span.innerHTML=` - ${count}`;
        })

        btn1.append(span);
        
        let btn2= document.createElement("button");
        btn2.innerHTML="SHARE";
        btn2.setAttribute("id","btn");

        let span1=document.createElement("span");
        span1.innerHTML=` - ${localStorage.getItem("count1")}`;
        btn2.addEventListener("click",()=>{
            count1++;
            localStorage.setItem("count1",count1);
            span1.innerHTML=` - ${count1}`;
        })

        btn2.append(span1);

        let btn_div= document.createElement("div");
        btn_div.append(btn1,btn2);

        btn_div.setAttribute("id", "btn_div");

        let box = document.createElement("div");
        box.append(img_div, title, description, country,btn_div);
        box.setAttribute("id", "box");

        document.getElementById("show_data").append(box);

    })
}

const profile = () => {
    document.getElementById("profile").innerHTML = "";

    let img = document.createElement("img");
    img.src = user.img;
    img.setAttribute("id", "profile_img");

    let img_div = document.createElement("div");
    img_div.setAttribute("id", "profile_img_div");
    img_div.append(img);

    let name = document.createElement("h1");
    name.innerHTML = user.name;

    let email = document.createElement("h5");
    email.innerHTML = user.email;

    let country = document.createElement("h4");
    country.innerHTML = user.country;

    document.getElementById("profile").append(img_div, name, email, country);

}

uimaker();
profile();