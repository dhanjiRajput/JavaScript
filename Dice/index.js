const roll=()=>{
    document.getElementById("dice_div").innerHTML="";

    let dice=Math.floor(Math.random()*6)+1;

    let img1=document.createElement("img");
    img1.src="./"+dice+".jpg";

    document.getElementById("dice_div").append(img1);
}

document.getElementById("btn_roll").addEventListener("click",roll);