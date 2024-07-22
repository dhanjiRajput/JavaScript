export const navbar = (login="Login",signup="Sign UP") => {
    return `<nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="rounded" id="logo"
                        src="/Personal_Project/Images/project.png" alt="Image Loading.." height="30px" width="80px"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link ms-0" href="/Personal_Project/index.html" id="nav_a"><i class="fa-solid fa-house"></i>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Personal_Project/Pages/list_exam.html" id="nav_a"><i class="fa-solid fa-bag-shopping"></i>List Exam</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Personal_Project/Pages/add_exam.html" id="nav_a"><i class="fa-solid fa-plus"></i>Add Exam</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Personal_Project/Pages/login.html" id="login"><i class="fa-solid fa-user"></i>${login}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Personal_Project/Pages/sign_up.html" id="nav_a"><i class="fa-solid fa-user-plus"></i>${signup}</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search" id="search">
                        <input class="form-control me-2" type="search" id="search_input" placeholder="Enter Category" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>`
}