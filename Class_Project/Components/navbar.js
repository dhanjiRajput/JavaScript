const navbar=(login="Login",signup="Sign UP")=>{
    return `<nav class="navbar navbar-expand-lg bg-dark fw-bold">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="../Class_Project/Images/logo.avif" alt="Loading.." height="30px"
                        width="50px" id="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation" style="background-color: white;">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./Class_Project/index.html" id="nav_a"><i class="fa-solid fa-house"></i>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../Class_Project/Pages/product.html" id="nav_a"><i class="fa-solid fa-bag-shopping"></i>Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../Class_Project/Pages/add_product.html" id="nav_a"><i class="fa-solid fa-circle-plus"></i>Add Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../Class_Project/Pages/cart.html" id="nav_a"><i class="fa-solid fa-cart-shopping"></i>Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../Class_Project/Pages/login.html" id="nav_a"><i class="fa-solid fa-user"></i>${login}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../Class_Project/Pages/sign_up.html" id="nav_a"><i class="fa-solid fa-user-plus"></i>${signup}</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>`
}

export default navbar
