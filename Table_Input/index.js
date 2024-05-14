let push_data=[];

const deleteone=(index)=>{
    push_data.splice(1,1);
    uimaker();
}

const uimaker=()=>{
    document.getElementById("tbody").innerHTML="";

    push_data.map((item,index)=>{

        let td1=document.createElement("td");
        td1.innerHTML=item.name;

        let td2=document.createElement("td");
        td2.innerHTML=item.number;

        let td3=document.createElement("td");
        td3.innerHTML=item.age;

        let td4=document.createElement("td");
        td4.innerHTML=item.salary;

        let td5=document.createElement("td");
        td5.innerHTML=item.email;

        let btn2=document.createElement("button");
        btn2.innerHTML="Delete";

        let td6=document.createElement("td");
        td6.append(btn2);

        td6.setAttribute("id","td6");

        btn2.setAttribute("class","btn1");

        let tr=document.createElement("tr");
        tr.append(td1,td2,td3,td4,td5,td6);

        document.getElementById("tbody").append(tr);
        btn2.addEventListener("click",()=>deleteone(index));
    });
}
const handledata=(e)=>{
    e.preventDefault();

    let get_data={
        name:document.getElementById("name").value,
        number:document.getElementById("number").value,
        age:document.getElementById("age").value,
        salary:document.getElementById("salary").value,
        email:document.getElementById("email").value,
    }
    push_data.push(get_data);
    uimaker();
}
document.getElementById("input_data").addEventListener("submit",handledata);
document.getElementById("btn1").addEventListener("click",()=>{
    document.getElementById("tbody").innerHTML="";
    push_data=[];
})