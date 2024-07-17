const getdata=async(data)=>{
    let req= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=${data}&type=video&key=AIzaSyDgtSMeNK_KhoiBej-3k-dcQSdPON54cp8`);
    let res=await req.json();
    mapper(res.items);
}   

const mapper=(data)=>{
    document.getElementById("show_data").innerHTML="";

    data.map((item,index)=>{
        let poster=document.createElement("img");
        poster.src=item.snippet.thumbnails.high.url;
        poster.setAttribute("id","poster");

        poster.addEventListener("click",()=>{
            localStorage.setItem("id",item.id.videoId);
            window.location.href="/YouTube/view_page.html";
        })

        let title=document.createElement("h6");
        title.innerHTML=item.snippet.title;

        let channel=document.createElement("span");
        channel=item.snippet.channelTitle;

        let box=document.createElement("div");
        box.append(poster,title,channel);
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