let push_data = [];
let count = 0;
let total= 0;

const deleteone = (index) => {
    push_data.splice(index, 1);

    count = 0;
    document.getElementById("employee_count").innerHTML = `Total Active Employee : ${count}`;

    total = 0;
    document.getElementById("total_salary").innerHTML = `Total Salary of Employee : ${total}`;
    uimaker();
}


const uimaker = () => {
    document.getElementById("tbody").innerHTML = "";

    push_data.map((item, index) => {

        let td1 = document.createElement("td");
        td1.innerHTML = item.name;

        let td2 = document.createElement("td");
        td2.innerHTML = item.job;

        let td3 = document.createElement("td");
        td3.innerHTML = item.depart;

        let td4 = document.createElement("td");
        td4.innerHTML = item.salary;

        let td5 = document.createElement("td");
        td5.innerHTML = item.email;

        let td6 = document.createElement("td");
        td6.innerHTML = item.exp;

        let td7 = document.createElement("td");

        if (item.exp > 5) {
            td7.innerHTML = "senior";
        }
        else {
            td7.innerHTML = "junior";
        }

        let btn2 = document.createElement("button");
        btn2.innerHTML = "Delete";

        btn2.setAttribute("class", "btnn")

        let td8 = document.createElement("td");
        td8.append(btn2);

        td8.setAttribute("id", "td8");

        let tr = document.createElement("tr");

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

        document.getElementById("tbody").append(tr);
        btn2.addEventListener("click", () => deleteone(index));

        count++;
        document.getElementById("employee_count").innerHTML = `Total Active Employee : ${count}`;

        total += parseInt(item.salary);
        document.getElementById("total_salary").innerHTML = `Total Salary of Employee : ${total}`;
    });
    count = 0;
    total = 0;
}

const handledata = (e) => {
    e.preventDefault();

    let get_data = {
        name: document.getElementById("name").value,
        job: document.getElementById("job").value,
        depart: document.getElementById("depart").value,
        salary: document.getElementById("salary").value,
        email: document.getElementById("email").value,
        exp: document.getElementById("exp").value,
    }

    push_data.push(get_data);
    uimaker();
}

document.getElementById("input_data").addEventListener("submit", handledata);

document.getElementById("btn1").addEventListener("click", () => {
    document.getElementById("tbody").innerHTML = "";
    push_data = [];
    count = 0;
    document.getElementById("employee_count").innerHTML = `Total Active Employee : ${count}`
    total = 0;
    document.getElementById("total_salary").innerHTML = `Total Salary of Employee : ${total}`;
});


