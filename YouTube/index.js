const getdata=async(data)=>{
    let req= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${data}&type=video&key=AIzaSyDgtSMeNK_KhoiBej-3k-dcQSdPON54cp8`);
    let res=await req.json();
    mapper(res.items);
}

const mapper=(data)=>{
    document.getElementById("show_data").innerHTML="";

    data.map((item,index)=>{
        let poster=document.createElement("img");
        poster.src=item.snippet.thumbnails.high.url;
        poster.setAttribute("id","poster")

        let box=document.createElement("div");
        box.append(poster);
        box.setAttribute("id","box");
        document.getElementById("show_data").append(box);

    })
}

const handledata=(e)=>{
    e.preventDefault();

    let search=document.getElementById("input").value;
    getdata(search);
}
document.getElementById("search").addEventListener("input",handledata);