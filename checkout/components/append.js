function append(container,userDataObj){
    // console.log(container)
    let  name = [userDataObj.firstName,userDataObj.lastName]
    let address1 = userDataObj.address1
    let address2 = userDataObj.address2
    let cityStateZipcode = [userDataObj.city,userDataObj.state,userDataObj.zipcode]
    let country = userDataObj.country;
    let phone = userDataObj.phone

    let editHeadingDiv = document.createElement("div")
    let edit = document.createElement("span");
    edit.innerText = "Edit"
    edit.style.color = "rgb(21, 7, 166)"
    edit.style.cursor = "pointer"
    edit.style.textDecoration = "underline"
    edit.setAttribute("class","edit_A")
    let heading = document.createElement("h2")
    heading.innerText = "SHIPPING ADDRESS"
    heading.style.display = "inline-block"
    heading.style.marginRight = "80px"
    editHeadingDiv.append(heading,edit)

   let namep = document.createElement("p")
   namep.innerText = name.join(" ")
   let address1p = document.createElement("p")
   address1p.innerText = address1
   let address2p = document.createElement("p")
   address2p.innerText = address2
   let cityStateZipcodep = document.createElement("p")
   cityStateZipcodep.innerText = cityStateZipcode.join(",")
   let countryp = document.createElement("p")
   countryp.innerText = country
   let phonep = document.createElement("p")
   phonep.innerText = phone
  
  

   container.append(editHeadingDiv,namep,address1p,address2p,cityStateZipcodep,countryp,phonep)

}



function productAppend(userProDataArray,product_details){
  userProDataArray.forEach((el)=>{
    let hr = document.createElement("hr")
    let cart = document.createElement("div")
    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    let name = document.createElement("h3");
    name.innerText = el.name
    let type = document.createElement("p");
    type.innerText = el.type
    let size = document.createElement("p");
    size.innerText = el.size
    let price = document.createElement("span");
    price.innerText = `Price : $${el.price}`
    let quantity = document.createElement("span");
    quantity.style.marginLeft = "30px"
    quantity.innerText = `Qty : ${el.quantity}`
    cart.append(image,div)
    div.append(name,type,size,price,quantity)
    product_details.append(cart)
  })

 
}


function orderDetails(orer_value){
  console.log(orer_value)
    
  let cart = document.createElement("div")
  
  let orderDet = document.createElement("h2");
  orderDet.innerText = "ORDER DETAILS"

  let desc = document.createElement("p");
  desc.innerText = "Prices are inclusive of all taxes"
  desc.setAttribute("class","desc")

  let orderSumm = document.createElement("p");
  orderSumm.innerText = "Order Summary"

  let totalmrpDiv = document.createElement("div")
  totalmrpDiv.setAttribute("class","detailamount")
  let totalmrp = document.createElement("span");
  totalmrp.innerText = "Total MRP"
  let totalmrpvalue = document.createElement("span");
  totalmrpvalue.innerText = orer_value.mrp
  totalmrpDiv.append(totalmrp,totalmrpvalue)

  let shippingchargeDiv = document.createElement("div")
  shippingchargeDiv.setAttribute("class","detailamount")
  let shippingcharge = document.createElement("span");
  shippingcharge.innerText = "Shipping charges"
  let shippingchargevalue = document.createElement("span");
  shippingchargevalue.innerText = orer_value.shippingcharge;

  shippingchargeDiv.append(shippingcharge,shippingchargevalue)

  let discountDiv = document.createElement("div")
  discountDiv.setAttribute("class","detailamount")
  let discount = document.createElement("span");
  discount.innerText = "Discount"
  let discountvalue = document.createElement("span");
  discountvalue.innerText = orer_value.discount
  discountDiv.append(discount,discountvalue)

  

  let totalAmountDiv = document.createElement("div")
  totalAmountDiv.setAttribute("class","total")
  let totalAmount = document.createElement("span")
  totalAmount.innerText = "ORDER TOTAL"
  let totalAmountvalue = document.createElement("span")
  totalAmountvalue.innerText = orer_value.total
  totalAmountDiv.append(totalAmount,totalAmountvalue)

  orderDetails_A.append(cart)
  cart.append(orderDet,desc,orderSumm,totalmrpDiv,shippingchargeDiv,discountDiv,totalAmountDiv)
}





export {append, productAppend,orderDetails}



