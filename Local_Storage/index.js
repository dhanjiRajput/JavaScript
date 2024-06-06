
let count=localStorage.getItem("count")||0;
let count=localStorage.getItem("count")||0;
let count=localStorage.getItem("count")||0;
let count=localStorage.getItem("count")||0;

const cnt_local_storage=(id,key)=>{
    count++;
    document.getElementById(id).innerHTML=count;
    localStorage.setItem(key,count);
}

const handle=()=>{
    cnt_local_storage("bd_like","count");
    cnt_local_storage("bd_comment","comment");
    cnt_local_storage("bd_follow","follow");
}

document.getElementById("like").addEventListener("click",handle);