import getvalue from "../Components/helper.js";
let flag=false;
const handledata = (e) => {
    e.preventDefault();

    let user = {
        username: getvalue("username"),
        email: getvalue("email"),
        password: getvalue("password")
    }

    const validusername = /^[0-9A-Za-z]{6,16}$/;
    const validpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (validusername.test(user.username)) {
        flag=true;
    }else{
        document.getElementById("username_valid").innerHTML="Invalid UserName";
    }

    if(validpassword.test(user.password)){
        flag=true;
    }else{
        document.getElementById("password_valid").innerHTML="Password Must Be Strong..";
    }

    if(flag){
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("isLogin",true);
        window.location.href="/Class_Project/index.html";
    }


}
document.getElementById("sign_up").addEventListener("submit", handledata);