// signup btn in log in modal
let signupbtn = document.getElementById("demosignup");
let targetsignupbtn = document.getElementById("mainsignup");
signupbtn.addEventListener("click", function () {

    targetsignupbtn.click();
})

let demo = document.getElementById("demologin");
let main = document.getElementById("mainlogin");
demo.addEventListener("click", function () {
    main.click();
    main.style.transition = ".4s"
})
// signup validation
// Eye icon toggle
let pswtoggle = document.getElementById("pswtoggle");
let confirmpswtoggle = document.getElementById("confrmpswicon");

let heye = document.getElementById("hideneye");
console.log(heye);

pswtoggle.addEventListener("click", function () {
    pswtoggle.classList.toggle("fa-eye-slash");
    console.log('click');
    var x = document.getElementById("Password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
});

confirmpswtoggle.addEventListener("click", function () {
    confirmpswtoggle.classList.toggle("fa-eye-slash");
    var x = document.getElementById("confirmpsw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
})


// username
let username = document.getElementById("username");
let validusername = false;
username.addEventListener("blur", function () {
    console.log(username.value);

    let regx = /^[a-zA-Z0-9_.]{3,25}$/;
    let namevalue = username.value;
    if (regx.test(namevalue)) {
        validusername = true;
        username.classList.add("is-valid");
        username.classList.remove("is-invalid");
        // document.getElementById("errorname").innerText=""

    }
    else {
        username.classList.add("is-invalid")
        username.classList.remove("is-valid");
        // document.getElementById("errorname").innerText="password are not match"
    }

})

// Email

let useremail = document.getElementById("useremail");
let validusermail = false;
useremail.addEventListener("blur", function () {
    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.[a-zA-Z]{2,7}$/;
    let emailvalue = useremail.value;
    if (regx.test(emailvalue)) {
        validusermail = true;
        useremail.classList.add("is-valid");
        useremail.classList.remove("is-invalid");
        useremail.style.outline = "1px solid green"
    }
    else {
        useremail.classList.add("is-invalid");
        useremail.classList.remove("is-valid");
        useremail.style.outline = "1px solid red"
    }
})
// password

let userpassword = document.getElementById("Password");
let passwordvalid = false;
userpassword.addEventListener("blur", function () {
    let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let passwordvalue = userpassword.value;
    if (regx.test(passwordvalue)) {
        userpassword.classList.add("is-valid");
        userpassword.classList.remove("is-invalid");
        userpassword.style.outline = "1px solid green"
        passwordvalid = true;
    }

    else {
        userpassword.classList.add("is-invalid");
        userpassword.classList.remove("is-valid");
        userpassword.style.outline = "1px solid red"
    }
})


// confirmpsw

let userconfirmpassword = document.getElementById("confirmpsw");
let confirmpswvalid = false
userconfirmpassword.addEventListener("blur", function () {
    let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    let confirmpasswordvalue = userconfirmpassword.value;
    if (regx.test(confirmpasswordvalue)) {
        userconfirmpassword.classList.add("is-valid");
        userconfirmpassword.classList.remove("is-invalid");
        userpassword.style.outline = "1px solid green"


    }
    else {
        userconfirmpassword.classList.add("is-invalid");
        userconfirmpassword.classList.remove("is-valid");
        userpassword.style.outline = "1px solid red"

    }

    let psw = document.getElementById("Password");
    console.log(psw.value);

    if (psw.value === confirmpasswordvalue) {
        console.log("match");
        userconfirmpassword.classList.add("is-valid");
        userconfirmpassword.classList.remove("is-invalid");
        userpassword.style.outline = "1px solid green"
        document.getElementById("confirmpswtext").innerText = ""
        confirmpswvalid = true;
        // document.getElementById("signup_btn").disabled=false;

    }
    else {
        console.log('not match', confirmpasswordvalue);
        userconfirmpassword.classList.add("is-invalid");
        userconfirmpassword.classList.remove("is-valid");
        userpassword.style.outline = "1px solid red"
        document.getElementById("confirmpswtext").innerText = "Password are not match"
        // document.getElementById("signup_btn").disabled=true;
        confirmpswvalid = false
    }

})


// console.log(validusername);



// submit signup

let sign_upbtn = document.getElementById("signup_btn");
sign_upbtn.addEventListener("click", function () {
    console.log(validusermail);
    console.log(validusername);
    console.log(passwordvalid);
    console.log(confirmpswvalid);

    if (validusermail && validusername && passwordvalid && confirmpswvalid) {
        // document.getElementById("signup_btn").disabled=false;


    }
    else {
        // document.getElementById("signup_btn").disabled=true;
        alert("Input Details Are Not Valid")

    }
})


// login

let mail=document.getElementById("loginusermail");
let mailvalid=false;
mail.addEventListener("blur",function(){

    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.[a-zA-Z]{2,7}$/;
    let mailvalue=mail.value;
    if(regx.test(mailvalue)){
        mail.classList.add("is-valid");
        mail.classList.remove("is-invalid");
        mailvalid=true;
    }
    else{
        mail.classList.add("is-invalid");
        mail.classList.remove("is-valid");
        mailvalid=false;
    }

})

let loginpsw=document.getElementById("loginpsw");
let loginpasswordvalid=false;
loginpsw.addEventListener("blur",function(){
    let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let passwordvalue=loginpsw.value;
    if(regx.test(passwordvalue)){
        loginpsw.classList.add("is-valid");
        loginpsw.classList.remove("is-invalid");
        loginpasswordvalid=true;
    }
    else{
        loginpsw.classList.add("is-invalid");
        loginpsw.classList.remove("is-valid");
        loginpasswordvalid=false;
    }
})

let loginpswicon=document.getElementById("logintgicon");
loginpswicon.addEventListener("click",function(){
    loginpswicon.classList.toggle("fa-eye-slash");
    var inputtype=document.getElementById("loginpsw");
    if(inputtype.type=="password"){
        inputtype.type="text";
    }
    else{
        inputtype.type="password"
    }

})

let loginbtn=document.getElementById("login_btn");
loginbtn.addEventListener("click",function(){
    if(mailvalid&&loginpasswordvalid){

    }
    else{
        alert("Login details are not valid");
    }
})