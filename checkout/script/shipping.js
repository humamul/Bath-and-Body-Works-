

import process from "../components/process.js"

let process_div = document.getElementById("process_div_A")
process_div.innerHTML = process()



var shipping = document.getElementById("shipping_A")
if(shipping.innerText=="Shipping"){
    shipping.style.color = "red"
}


let userDataObj = JSON.parse(localStorage.getItem("userInfo"))||{}

document.getElementById("submit_A").addEventListener("click",userData)

function userData(){
    event.preventDefault()


   let firstName = document.getElementById("first_name_A")
   userDataObj.firstName = firstName.value
   let lastName = document.getElementById("last_name_A")
   userDataObj.lastName = lastName.value
   let address1 = document.getElementById("address1_A")
   userDataObj.address1 = address1.value
   let address2 = document.getElementById("address2_A")
   userDataObj.address2 = address2.value
   let city = document.getElementById("city_A")
   userDataObj.city = city.value
   let state = document.getElementById("state_A")
   userDataObj.state = state.value
   let country= document.getElementById("country_A")
   userDataObj.country = country.value
   let zipcode = document.getElementById("zip_code_A")
   userDataObj.zipcode = zipcode.value
   let phone = document.getElementById("phone_A")
   userDataObj.phone = phone.value

   localStorage.setItem("userInfo",JSON.stringify(userDataObj))



   
   if(firstName.value == "" || lastName.value=="" || address1.value=="" || address2.value=="" || city.value==""  ||state.value=="" || country.value=="" || zipcode.value=="" || phone.value==""){
    alert("Fill all details")
   }
   else{
       window.location.href="../checkout/billing.html"
   }


}



import {append , productAppend,orderDetails} from "../components/append.js"
let user_address =  document.getElementById("user_address_A");
append(user_address,userDataObj)


let userProDataArray = JSON.parse(localStorage.getItem("cart"))
let product_details = document.getElementById("product_details_A")
productAppend(userProDataArray,product_details)



let orer_value = JSON.parse(localStorage.getItem("order_value"))
let orderDetails_A = document.getElementById("orderDetails_A")
orderDetails(orer_value,orderDetails_A)



document.querySelector(".edit_A").addEventListener("click",editFunc)
function editFunc(){
    console.log("x")
    let again = userData()
    window.location.reload()

}










