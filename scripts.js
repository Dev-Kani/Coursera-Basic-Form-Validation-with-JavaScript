function nameValidator() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;

    
    if (fname === "" && lname === "") {
        alert("Full name is required")
        return false;
    }
    if (fname === "" || lname === "") {
        alert("Full name is required")
        return false;
    }
};

function emailValidator() {
    let email = document.getElementById("email").value;
    let regx = /^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})$/;


    if(regx.test(email)) {
        document.getElementById("invalidEmail").innerHTML = "Valid"
        document.getElementById("invalidEmail").style.visibility = "visible"
        document.getElementById("invalidEmail").style.color = "Green"
    } else {
        document.getElementById("invalidEmail").innerHTML = "Invalid"
        document.getElementById("invalidEmail").style.visibility = "visible"
        document.getElementById("invalidEmail").style.color = "Red"
    }
}