const handlevalidation = (isvalid, id, idx, emsg, umsg) => {

    let value = document.getElementById(id).value;
    let input = document.getElementById(id);

    if (isvalid.test(value)) {
        document.getElementById(idx).innerHTML = umsg;
        document.getElementById(id).style.border = "2px solid green";
        input.classList.remove('error');
    } else {
        document.getElementById(idx).innerHTML = emsg;
        document.getElementById(id).style.border = "2px solid red";
        window.navigator.vibrate(1000);
        input.classList.add('error');
    }
}

const validusername = /^[0-9A-Za-z]{6,16}$/;
document.getElementById("name").addEventListener("input", () => {
    handlevalidation(validusername, "name", "name_msg", "Not Valid", "Valid...");
})

const validnumber = /^[0-9]{6,10}$/;
document.getElementById("number").addEventListener("input", () => {
    handlevalidation(validnumber, "number", "number_msg", "Not Valid", "Valid...");
})

const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
document.getElementById("password").addEventListener("input", () => {
    handlevalidation(validpassword, "password", "password_msg", "Not Valid", "Valid...");
})