let products=JSON.parse(localStorage.getItem("products"))||[];

const handle=(e)=>{
    e.preventDefault();

    let input_data ={
        img:document.getElementById("img").value,
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
    }

    products.push(input_data);
    localStorage.setItem("products",JSON.stringify(products));

    window.location.href="/Local_Storage_New_page/data.html";
}

document.getElementById("add_product").addEventListener("submit",handle);