
/* First Name Validation Start */

function firstNameValidaton() {
    var nameValidation=/^([a-zA-Z ]){3,15}$/;
    var nameValue = document.getElementById("firstName").value;
    var msg = document.getElementById('firstNameMgs');

    if(!nameValidation.test(nameValue))
    {
        msg.classList.remove("d-none");
        msg.innerHTML = "Enter the Valid Name";
        if(nameValue.length==0)
        {
            msg.classList.remove("d-none");
            msg.innerHTML = "Enter the Firt Name";
        }
    }
    else
    {
        msg.classList.add("d-none");
        msg.innerHTML = "";  
    }
}
/* First Name Validation End */

/* Last Name Validation Start */

function lastNameValidaton() {
    var nameValidation=/^([a-zA-Z ]){3,15}$/;
    var nameValue = document.getElementById("lastName").value;
    var msg = document.getElementById('lastNameMgs');

    if(!nameValidation.test(nameValue)){
        msg.classList.remove("d-none");
        msg.innerHTML = "Enter the Valid Name";
        if(nameValue.length==0){
            msg.classList.add("d-none");
        }
    }else{
        msg.classList.add("d-none");
        msg.innerHTML = "";  
    }
}
/* Last Name Validation End */


/* Phone Number Validation Start */

function phoneValidaton() {
    var contactValidation = /^([+0-9]){11}$/;
    var contactInput = document.getElementById("phone").value;
    var msg = document.getElementById('phoneMgs');

    if(!contactValidation.test(contactInput)){
        msg.classList.remove("d-none");
        msg.innerHTML = "Phone Number invalid";

        if(contactInput.length==0){
            msg.classList.remove("d-none");
            msg.innerHTML = "Enter the Phone Number";
        }
    }else{
        msg.innerHTML = "";
        msg.classList.add("d-none");
    }
}
/* Phone Number Validation End */



/* Email Validation Start */

function emailValidation() {
    var mailValidation=/\S+@\S+\.\S+/;
    var emailInput = document.getElementById("email").value;
    var msg = document.getElementById('emailMgs');

    if(!mailValidation.test(emailInput)){
        msg.classList.remove("d-none");
        msg.innerHTML = "Enter the Valid Email";

        if(emailInput.length==0){
            msg.classList.add("d-none");
        }
    }else{
        msg.innerHTML = "";
        msg.classList.add("d-none");
    }
}
/* Email Validation End */


// Password Validation
function passwordInputValidationTwo() {
    var passwordValidation = /^([a-zA-Z@#$%^&*(){}.,0-9?/\+-;:'"|!=_ ]){6,32}$/;
    var passwordInput = document.getElementById("passwordInput").value;
    var msgOne = document.getElementById('passwordDataMgs');

    if(!passwordValidation.test(passwordInput)){
        msg.classList.remove("d-none");
        msg.classList.add("text-danger");
        msg.classList.remove("text-success");
        msg.innerHTML = "Password Not Strong";
    }else{
        
        msg.innerHTML = "Strong Password";
        msg.classList.remove("text-danger");
        msg.classList.add("text-success");
        
    }
}

// Password Validation Over All
function checkPasswordValidation(){
    var value = document.getElementById("passwordImput").value;
    var msgTwo = document.getElementById('passwordDataMgsTwo');
    var msgOne = document.getElementById('passwordDataMgs');
    var congratulateMsg = document.getElementById('congratulateMsg');

    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    const isValidLength = /^.{6,32}$/;

    if(value.length==0){
        msgTwo.classList.add("d-none");
        msgOne.innerHTML = "";
        congratulateMsg.classList.add("d-none");

    }else if (!isNonWhiteSpace.test(value)) {
        msgTwo.classList.remove("d-none");
        congratulateMsg.classList.add("d-none");
        msgTwo.innerHTML =  "Password Should not Whitespaces.";

    }else if (!isContainsUppercase.test(value)) {
        msgTwo.classList.remove("d-none");
        congratulateMsg.classList.add("d-none");
        msgTwo.innerHTML =  "Password must have at least one Uppercase Character.";

    }else if (!isContainsLowercase.test(value)) {
        msgTwo.classList.remove("d-none");
        congratulateMsg.classList.add("d-none");
        msgTwo.innerHTML =  "Password must have at least one Lowercase Character.";

    }else if (!isContainsNumber.test(value)) {
        msgTwo.classList.remove("d-none");
        congratulateMsg.classList.add("d-none");
        msgTwo.innerHTML =  "Password must contain at least one Digit.";

    }else if (!isContainsSymbol.test(value)) {
        msgTwo.classList.remove("d-none");
        congratulateMsg.classList.add("d-none");
        msgTwo.innerHTML =  "Password must contain at least one Special Symbol.";

    }else if (!isValidLength.test(value)) {
        msgTwo.classList.remove("d-none");
        congratulateMsg.classList.add("d-none");
        msgTwo.innerHTML =  "Password must be 6-32 Characters Long.";

    }else{
        msgOne.classList.remove("text-danger");
        msgOne.classList.remove("d-none");
        msgOne.classList.add("text-success");
        msgTwo.classList.add("d-none");

        msgOne.innerHTML = "Strong Password";
        congratulateMsg.classList.remove("d-none");
        setTimeout(function(){
            msgOne.innerHTML = "";
            congratulateMsg.classList.add("d-none");
        },2000)
    }
  
    
}

// Confirm Password Validation
function confirmPasswordValidation(){

    var password = document.getElementById("passwordImput").value;
    var confirmPassword = document.getElementById("conPasswordInput").value;
    var msg = document.getElementById('conPasswordDataMgs');

    if(confirmPassword.length==0){
        msg.innerHTML = "Enter the password";

    }
    else{
        if(password === confirmPassword){
            msg.innerHTML = "";
            msg.classList.add("d-none");
        }
        else{
    
            msg.classList.remove("d-none");
            msg.innerHTML = "Password Not Match..!";
        }
    
    }

}



// Address Validation
function addressValidation() {
    var addressValidation = /^([a-zA-Z@#$%^&*(){}.,0-9?/\+-;:'"|!=_ ]){5,500}$/;
    var addressInput = document.getElementById("address").value;
    var msg = document.getElementById('addressAlart');

    if(!addressValidation.test(addressInput)){
        msg.classList.remove("d-none");
        msg.innerHTML = "Address too short. Or, Please Removed '< >' this...! ";

        if(addressInput.length==0){
            msg.classList.add("d-none");
        }
    }else{
        msg.innerHTML = "";
        msg.classList.add("d-none");
    }
}

// Image Validation
function imgValidation() {
    var msg = document.getElementById("imgAlart");
    var file    = document.querySelector('input[type=file]').files[0];
  
    if (file) 
    {
        let fileName = file.name;
        let fileExe = fileName.split('.').pop();
        if(fileExe==='png' || fileExe==='jpg' || fileExe==='jpeg' || fileExe==='JPG' || fileExe==='PNG' )
        {
            msg.classList.add("d-none");
        }
        else
        {
            msg.classList.remove("d-none"); 
        }
    } 

}


function onSubmitConfirmBtn(){
    var firstName       = document.getElementById("firstName").value;
    var lastName        = document.getElementById("lastName").value;
    var emai            = document.getElementById("email").value;
    var oldPass         = document.getElementById("passwordInput").value;
    var confirmPass     = document.getElementById("conPasswordInput").value;
    var phone           = document.getElementById("phone").value;
    var address         = document.getElementById("address").value;
    var img             = document.querySelector('input[type=file]').files[0];


    if(firstName.length == 0)
    {
        let msg = document.getElementById("nameDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Enter Your Name";
        setTimeout(function(){
            msg.classList.add("d-none");
        },3000)
        if(lastName.length == 0)
    {
        let msg = document.getElementById("nameDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Enter Your Name";
        setTimeout(function(){
            msg.classList.add("d-none");
        },3000)


    }else if(emai.length == 0){
        let msg = document.getElementById("emailDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Enter Your E-mail Address";
        setTimeout(function(){
            msg.classList.add("d-none");
        },3000)

    }else if(oldPass.length == 0){
        let msg = document.getElementById("passwordDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Enter Your Password";
        setTimeout(function(){
            msg.classList.add("d-none");
        },3000)

    }else if(confirmPass.length == 0){
        let msg = document.getElementById("conPasswordDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Enter Your Confirm Password";
        setTimeout(function(){
            msg.classList.add("d-none");
        },3000)

    }else if(phone.length == 0){
        let msg = document.getElementById("contactDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Enter Your Valid Contact Number";
        setTimeout(function(){
            msg.classList.add("d-none");
        },3000)

    }else if(address.length == 0){
        let msg = document.getElementById("addressDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Enter Your Correct Address";
        setTimeout(function(){
            msg.classList.add("d-none");
        },3000)

    }else if( Math.round(img.size/(1024)) < 50 || Math.round(img.size/(1024)) > 5000 ){
        let msg = document.getElementById("imgDataMgs");
        msg.classList.remove("d-none");
        msg.innerHTML = "Please Chooses a image Size Minimum 50Kb Maximum Size 5MB.";
        setTimeout(function(){
            msg.classList.add("d-none");
        },4000)

    }else{
        let confirmMsg = document.getElementById("RegBtn");
        confirmMsg.classList.add("disabled");
        confirmMsg.classList.remove("btn-info");
        confirmMsg.classList.add("btn-success");
        confirmMsg.innerHTML = "Registration Successful, Thank you...."
        setTimeout(function(){
            confirmMsg.classList.remove("disabled");
            confirmMsg.classList.remove("btn-success");
            confirmMsg.classList.add("btn-info");
            confirmMsg.innerHTML = "Registration Now"
        },5000)
    }

}
}
