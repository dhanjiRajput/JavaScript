let count1=localStorage.getItem("count1")||0;
document.getElementById("count1").innerHTML=count1;
let count2=localStorage.getItem("count2")||0;
document.getElementById("count2").innerHTML=count2;
let count3=localStorage.getItem("count3")||0;
document.getElementById("count3").innerHTML=count3;
let count4=localStorage.getItem("count4")||0;
document.getElementById("count4").innerHTML=count4;

const counter=(id,storage)=>{
    let count=0;
    if(storage=="local"){
        count=localStorage.getItem(id)||0;
    }else{
        count=sessionStorage.getItem(id)||0;
    }
    
    //Store in the Web Storage....
    count++;
    document.getElementById(id).innerHTML=count;
    if(storage=="local"){
        localStorage.setItem(id,count);
    }else{
        sessionStorage.setItem(id,count);
    }
}

document.getElementById("like").addEventListener("click",()=>{
    counter("count1","local");
})
document.getElementById("comment").addEventListener("click",()=>{
    counter("count2","local");
})
document.getElementById("follow").addEventListener("click",()=>{
    counter("count3","local");
})
document.getElementById("share").addEventListener("click",()=>{
    counter("count4","local");
})











































// let count1;
// let count2,count3,count4;
// const action1=(count,id,key)=>{
//     count++;
//     document.getElementById(id).innerHTML=count;
//     localStorage.setItem(key,count);
// }

// const action2=(count,id,key)=>{
//     count++;
//     document.getElementById(id).innerHTML=count;
//     sessionStorage.setItem(key,count);
// }

// const clicked=(click_id,var_name,key,id,fun,storage)=>{
//     document.getElementById(click_id).addEventListener("click",()=>{
//         var_name=storage.getItem(key)||0;
//         fun(var_name,id,key);
//     });
// }
// clicked("like",count1,"key1","bd_like",action1,localStorage);
// clicked("comment",count2,"key2","bd_comment",action1,localStorage);
// clicked("follow",count3,"key3","bd_follow",action1,localStorage);
// clicked("share",count4,"key4","bd_share",action2,sessionStorage);