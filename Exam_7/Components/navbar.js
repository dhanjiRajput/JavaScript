const navbar = (login="Login",signup="Sign UP") => {
    return `<nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="rounded" id="logo"
                        src="/Exam_7/Images/Erlebniswelten_Nashornpagode_EN.png" alt="Image Loading.." height="30px" width="80px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/Exam_7/index.html" id="nav_a"><i class="fa-solid fa-house"></i>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Exam_7/Pages/add_places.html" id="nav_a"><i class="fa-solid fa-plus"></i>Add Places</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Exam_7/Pages/wish_list.html" id="nav_a"><i class="fa-solid fa-heart"></i>Wish List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Exam_7/Pages/login.html" id="login"><i class="fa-solid fa-user"></i>${login}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Exam_7/Pages/sign_up.html" id="nav_a"><i class="fa-solid fa-user-plus"></i>${signup}</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search" id="search">
                        <input class="form-control me-2" type="search" id="search_input" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>`
}

export default navbar