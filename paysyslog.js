//login function
//check credentials

//const userName =  "Denis" //document.getElementByid('userName');
//const passCode =  123456789 //document.getElementById('passCode');
//const submit = //document.getElementById('submit');

//onclick.call()
let storedusername = 'admin';

let storedpasscode = "password"

let cpsSubmit = document.getElementById("cpssubmit");
let userName, passCode, output;
    userName = document.getElementById("userName").value;
    passCode = document.getElementById("passCode");
function checkCred() {
    
    //sub = document.getElementById("submit");
    output = document.getElementById("output");

    if(userName === storedusername && passCode.value === storedpasscode) {
           window.location.href = "./dashboard.html";
           
        } else {
           output.innerHTML = "Incorrect username or passcode!";
    
        } 

};

//listen for 'Enter' key press 
passCode.addEventListener('keypress', function(event) {
    //if the user presses the Enter key

    if(event === 'Enter') {
        //Cancel the default action if needed
        event.preventDefault();

        //trigger the btn element with a click

        cpsSubmit.click();
    }
})
