const create_tag=(tag,value)=>{
    let tag=document.createElement(tag);
    tag=="img"? tag.src=value : tag.innerHTML=value

    return tag;
}

export default create_tag;