


import process from "../components/process.js"

let process_div = document.getElementById("process_div_A")
process_div.innerHTML = process()


let userDataObj = JSON.parse(localStorage.getItem("userInfo"))||{}

import {append,productAppend} from "../components/append.js"
let user_address =  document.getElementById("user_address_A");
append(user_address,userDataObj)


let userProDataArray = JSON.parse(localStorage.getItem("userProData"))
let product_details = document.getElementById("product_details_A")
productAppend(userProDataArray,product_details)


var billing = document.getElementById("billing_A")
if(billing.innerText=="Billing"){
    billing.style.color = "red"
}



document.getElementById("submit_A").addEventListener("click",userData)

function userData(){
    event.preventDefault()

    let email = document.getElementById("email_A")
    let cardName = document.getElementById("cardName_A")
    let cardNumber = document.getElementById("cardNumber_A")
    let date = document.getElementById("date_A")
    let securityCode = document.getElementById("securityCode_A")

    



   if(email.value == "" || cardName.value=="" || cardNumber.value=="" || date.value=="" ||securityCode.value==""){
    alert("Fill all details")
   }
   else{
       
       window.location.href="../checkout-page/review&submit.html"
   }


}


document.querySelector(".edit_A").addEventListener("click",editFunc)
function editFunc(){
    console.log("x")
    window.location.href = "../checkout-page/shipping.html"

}


