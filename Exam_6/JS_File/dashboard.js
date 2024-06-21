
let books = JSON.parse(localStorage.getItem("books")) || [];
let mybook = JSON.parse(localStorage.getItem("mybook")) || [];
let bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];

const mapper = (data) => {
    document.getElementById("list").innerHTML = "Loading Data.....";

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

        let btn1 = document.createElement("button");
        btn1.innerHTML = "Buy Now";
        btn1.setAttribute("id", "btn");
        let td7 = document.createElement("td");
        td7.append(btn1);
        btn1.addEventListener("click", () => {
            mybook.push(item);
            localStorage.setItem("mybook", JSON.stringify(mybook));
        });

        let btn2 = document.createElement("button");
        btn2.innerHTML = "BookMark";
        btn2.setAttribute("id", "btn");
        let td8 = document.createElement("td");
        td8.append(btn2);
        btn2.addEventListener("click", () => {
            bookmark.push(item);
            localStorage.setItem("bookmark", JSON.stringify(bookmark));
        });

        let tr1 = document.createElement("tr");
        tr1.append(td1, td2, td3, td4, td5, td6, td7, td8);

        document.getElementById("list").append(tr1);
    })
}

mapper(books);