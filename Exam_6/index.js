
//Store Books Data To Local Storage
let push_data = JSON.parse(localStorage.getItem("books")) || [];
const HandleData = (e) => {
    e.preventDefault();

    let book_data = {
        book_name: document.getElementById("book_name").value,
        book_author: document.getElementById("author_name").value,
        description: document.getElementById("description").value,
        date: document.getElementById("date").value,
        category: document.getElementById("category").value,
        price: document.getElementById("price").value,
    }

    let pass = "dk";
    let p = prompt("Enter Admin Code to Add Books...");

    if (pass == p) {
        push_data.push(book_data);
        localStorage.setItem("books", JSON.stringify(push_data));
        alert("Books Added Successfully....");
    } else {
        alert("You are Not Valid Person To Add Books....");
    }

}
document.getElementById("book_data").addEventListener("submit", HandleData);