let push_data=JSON.parse(localStorage.getItem("push_data"))||[];

const handledata=(e)=>{
    e.preventDefault();

    let data={
        title:document.getElementById("title").value,
        description:document.getElementById("description").value,
        img:document.getElementById("img").value,
        country:document.getElementById("country").value
    }

    push_data.push(data);
    localStorage.setItem("push_data",JSON.stringify(push_data));
    window.location.href = "/Exam_5/index.html";
}
document.getElementById("add_news").addEventListener("submit", handledata);