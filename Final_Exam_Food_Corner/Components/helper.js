export const createTag=(name,value)=>{
    let tag=document.createElement(name);
    name=="img"?tag.src=value:tag.innerHTML=value;
    return tag;
}

export const getvalue=(id)=>{
    return document.getElementById(id).value;
}