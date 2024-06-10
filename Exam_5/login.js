let user = JSON.parse(localStorage.getItem("user"));

const handledata = (e) => {
    e.preventDefault();

    let data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    if (user.email != data.email) {
        alert("User Not Found");
    } else if (user.password != data.password) {
        alert("Password is Invalid");
    } else if (user.email == data.email && user.password == data.password) {
        alert("Login Successfull");
        window.location.href = "/Exam_5/index.html";
    }
}

document.getElementById("login").addEventListener("submit", handledata);