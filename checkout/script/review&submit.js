import process from "../components/process.js"

let process_div = document.getElementById("process_div_A")
process_div.innerHTML = process()


let userDataObj = JSON.parse(localStorage.getItem("userInfo"))||{}

import {append,productAppend,orderDetails} from "../components/append.js"
let user_address =  document.getElementById("user_address_A");
append(user_address,userDataObj)


let userProDataArray = JSON.parse(localStorage.getItem("cart"))
let product_details = document.getElementById("product_details_A")
productAppend(userProDataArray,product_details)

let orer_value = JSON.parse(localStorage.getItem("order_value"))
let orderDetails_A = document.getElementById("orderDetails_A")
orderDetails(orer_value,orderDetails_A)



var reviewsubmit = document.getElementById("review&submit_A")
if(reviewsubmit.innerText=="Review & Submit Order"){
    reviewsubmit.style.color = "red"
}




document.getElementById("submit_A").addEventListener("click",userData)


function userData(){
    let cartArray = [];
    localStorage.setItem("cart",JSON.stringify(cartArray))

    window.location.href = "../index.html"
    alert("YOUR ORDER IS SUCCESSFULLY PLACED")

}