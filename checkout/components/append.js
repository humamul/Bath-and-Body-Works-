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

export {append, productAppend}



