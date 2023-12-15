let openSec = (evt, sec) => {
    let y, j, padders, holders;

    //get all tab contents, loop through and hide them
    holders = document.getElementsByClassName("holdwrap");
    for(y=0;y<holders.length;y++) {
        holders[y].style.display = "none";
    }

    //get all buttons, loop through each and change the class of the current to active;

    padders = document.getElementsByClassName("padder");
    for(j=0;j<padders.length;j++) {
        padders[j].className = padders[j].className.replace("active", " ");
    }


    //get tab content by id and display each when active class is targetted;

    document.getElementById(sec).style.display = "flex";
    evt.currentTarget.classList.add("active");
    evt.target.style = '#eee';
}


document.getElementById("opendefault").click();




//dashboard personal profile changes
//CHANGES MADE ON 8/8/2023
//The script below:
//1. Gets the icon and name 
//2. When icon is clicked, the text is made editable
//3. The edit pen is replaced by the "Save" text.

//The onclick attribute has been set in one instance, but has failed to 
//operate as intended.
// possible cause
//We have used event targets in the script rather than inline ones 
//that can be replaced

//Real cause
//we need to remove the targets

let nameOf = document.querySelector(".name-of")

let nameChange = document.getElementById("nameChange")


function changepName() {
    //check if the following are true
    
        nameOf.setAttribute("contenteditable", "true")
    nameChange.removeChild(document.getElementById("namepen"))
    nameChange.innerHTML = "Save"
    nameChange.removeEventListener('click', changepName)
    nameChange.addEventListener('click', savepName)
   
}

function savepName() {
    nameOf.removeAttribute('contenteditable', 'true')
    nameChange.innerHTML = "Saved"
}
nameChange.onclick = changepName

//end


let workTitle = document.querySelector(".work_title")

let workchanger = document.getElementById("workChange")



function changepWork() {
workTitle.setAttribute("contenteditable", "true")

workchanger.removeChild(document.getElementById("workpen"))
workchanger.innerHTML = "Save"
workchanger.removeEventListener('click', changepWork)
workchanger.addEventListener('click', savepWork)

}

function savepWork() {
    workchanger.removeAttribute("contenteditable", "true")
    workchanger.innerHTML = "Saved"
}

workchanger.addEventListener('click', changepWork);
//end

let skillTitle = document.querySelector(".skills_title") 

let skillsChange = document.getElementById("skillChange")

function changeskillTitle() {
    skillTitle.setAttribute("contenteditable", "true")
    skillsChange.removeChild(document.getElementById("skillpen"))
    skillsChange.innerHTML = "Save";

    skillsChange.removeEventListener("click", changeskillTitle)
    skillsChange.addEventListener('click', savepSkills)
}

skillsChange.onclick = changeskillTitle

function savepSkills() {
    skillsChange.removeAttribute("contenteditable", 'true')
    skillsChange.innerHTML = "Saved"
}

//end


let phoneUser = document.querySelector(".phone_user")

let phoneChange = document.getElementById("phoneChange")

function changePhonenum() {
    phoneUser.setAttribute("contenteditable", "true")
    phoneChange.removeChild(document.getElementById("phonepen"))
    phoneChange.innerHTML = "Save"
    phoneChange.removeEventListener("click", changePhonenum)
    phoneChange.addEventListener('click', savepPhone)
}

phoneChange.onclick = changePhonenum


function savepPhone() {
    phoneChange.removeAttribute("contenteditable", 'true')
    phoneChange.innerHTML = "Saved"
}
//end


let mailTitle = document.querySelector(".email_title")

let emailChange = document.getElementById("emailChange")

function changepEmail() {
    mailTitle.setAttribute("contenteditable", "true")
    emailChange.removeChild(document.getElementById("mailpen"))

    emailChange.innerHTML = "Save"

    emailChange.setAttribute("onclick", "savenewEmail()")
}

function savenewEmail() {
    emailChange.appendChild(document.getElementById("mailpen"))
}


emailChange.onclick = changepEmail

//end

//8/8/2023
//FROM SAVE, TO SAVED   , JS CAN dynamically add, replace and
//change text, items; but the major question is

//HOW CAN I MAKE PERMANENT CHANGES USING JAVASCRIPT ON A WEBPAGE?

//9/8/2023
//Well, for security reasons js does not make changes on the client side file system
//There are only two ways 
//one - to use the localStorage method
//or the sessionStorage

//the former is more reliable


//
//payments sidebar show on click - row754
let payBal = document.querySelector(".pay_bal")
let paybaldialog = document.querySelector(".payment_options")

function showpayBal() {
    //when the available paid balance is clicked, 
    //the sidebar appears

    paybaldialog.style.display = "flex";
    paybaldialog.style.flexDirection = "column"
    paybaldialog.style.justifyContent = "center"
    paybaldialog.style.alignItems = "center"
    payBal.removeEventListener('click', showpayBal)
    payBal.addEventListener('click', closepayBal)
}
payBal.onclick = showpayBal

function closepayBal() {
    paybaldialog.style.display = "none"
    payBal.removeEventListener('click', closepayBal)
    payBal.addEventListener('CLICK', showpayBal)
}


//loans sidebar
//loan bal onclick, display loan options

let loanBal = document.querySelector(".loan_bal")

let loanOptions = document.querySelector(".loan_options")

function showloanOptions() {
    loanOptions.style.display = "flex"
    loanOptions.style.flexDirection = "column"
    loanOptions.style.justifyContent = "center"
    loanOptions.style.alignItems = "center"
    loanBal.removeEventListener('click', showloanOptions)
    loanBal.addEventListener('click', closeloanBal)
}


function closeloanBal() {
    loanOptions.style.display = "none"
    loanBal.removeEventListener('click', closeloanBal)
    loanBal.addEventListener('CLICK', showloanOptions)
}

loanBal.onclick = showloanOptions


//XXXX-XXXX-XXXX-XXXX NUMBER INPUT FORMAT IN Withdrawal page
//not working - find out why

let nummask = document.querySelector('.submit-width-data').addEventListener('input', function(event){
    let inputNum = event.target.value;

    //Remove any non-digits from the input string
    inputNum = inputNum.replace(/\D/g, "");

    //Add  dashes at the appropriate positions (every 4 characters)
    inputNum = inputNum.replace(/(\d{4})(?=\d)/g, "$1-")

    //Update the input value with the formatted number
    event.target.value = inputNum;
  })
  


  //Address amount, balance and withdrawal display
//Objective 
/*This is what I need you to do
1. Have access to tchr balance, loan and money
2. show the same figures on all pages
3. if a withdrawal is made, that should automatically reflect on all pages
4. If an addition is made, the same occurs
5. The balance should change on input or after withdrawal is made, after is recommended

*/
  let tchamount = document.getElementById("pay_reqw")
let  tchloanBalance = document.getElementById("loan_advancew")

let remainingBal = document.getElementById('rem_balw')
    
    tchamount.innerHTML = "40000"
    tchloanBalance.innerHTML = "3000"
  //get the value being withdrawn

  let inputAmount = document.getElementById("inputAmount").value;

  //let remaining balance be tchamount - inputAmount

  let updatedBal = tchamount - inputAmount;

  remainingBal.innerHTML = updatedBal;



//when a sidebar menu is clicked on the withdrwal, page 
//open the main dashboard and target the specific tab

function openJobs() {
    window.location.href = "./dashboard.html#jobs";
}
    


//sign out button

function logout() {
    window.location.href = "./cpsdashboardlogin.html";
}

//let signouttchbtn = document.getElementById("signOutLabel");

//signouttchbtn.onclick = signoutTeaching();