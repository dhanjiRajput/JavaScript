let students=[];

//Function for show Value In UI
const uimaker=()=>{

    document.getElementById("student_list").innerHTML="";

    students.map((item)=>{
        let name=document.createElement("p");
        name.innerHTML=item.nam;

        let grid=document.createElement("p");
        grid.innerHTML=item.grid;

        let email=document.createElement("p");
        email.innerHTML=item.email;

        document.getElementById("student_list").append(name,grid,email);
        
    })
};

// Main Function To fetch Value from Input Tag
const HandleData=(e)=>{
    e.preventDefault();
    let student={
        nam:document.getElementById("name").value,
        grid:document.getElementById("grid").value,
        email:document.getElementById("email").value,
    };
    students.push(student);
    uimaker();
};
document.getElementById("student_data").addEventListener("submit",HandleData);