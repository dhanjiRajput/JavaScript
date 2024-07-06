export const post_method=async(products)=>{
    let req=await fetch("http://localhost:3000/products",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(products)
    })
    let res=await req.json();
}

export const create_tag=(name,value)=>{
    let tag=document.createElement(name);
    name=="img"?tag.src=value:tag.innerHTML=value;
    return tag;
}

export const delete_method=async(index)=>{
    let req=await fetch(`http://localhost:3000/products/${index}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
    })
    let res=await req.json();
}