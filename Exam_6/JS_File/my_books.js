let mybook = JSON.parse(localStorage.getItem("mybook")) || [];

const mapper = (data) => {
    document.getElementById("list").innerHTML = "";

    data.map((item) => {

        let td1 = document.createElement("td");
        td1.innerHTML = item.book_name;

        let td2 = document.createElement("td");
        td2.innerHTML = item.book_author;

        let td3 = document.createElement("td");
        td3.innerHTML = item.description;

        let td4 = document.createElement("td");
        td4.innerHTML = item.date;

        let td5 = document.createElement("td");
        td5.innerHTML = item.category

        let td6 = document.createElement("td");
        td6.innerHTML = item.price;

        let tr1 = document.createElement("tr");
        tr1.append(td1, td2, td3, td4, td5, td6);

        document.getElementById("list").append(tr1);
    })
}

mapper(mybook);