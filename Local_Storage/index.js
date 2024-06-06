let count1,count2,count3,count4;

const action1=(count,id,key)=>{
    count++;
    document.getElementById(id).innerHTML=count;
    localStorage.setItem(key,count);
}
const action2=(count,id,key)=>{
    count++;
    document.getElementById(id).innerHTML=count;
    sessionStorage.setItem(key,count);
}
const clicked=(click_id,var_name,key,id,fun,storage)=>{
    document.getElementById(click_id).addEventListener("click",()=>{
        var_name=storage.getItem(key)||0;
        fun(var_name,id,key);
    });
}
clicked("like",count1,"key1","bd_like",action1,localStorage);
clicked("comment",count2,"key2","bd_comment",action1,localStorage);
clicked("follow",count3,"key3","bd_follow",action1,localStorage);
clicked("share",count4,"key4","bd_share",action2,sessionStorage);