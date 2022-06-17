import {navbar_h} from "../navbar/script/navbar";
document.querySelector("navbar_s").innerHTML=navbar_h();

import {footer} from "../navbar/script/footer";
document.querySelector("#footer").innerHTML=footer();



let rawData = JSON.parse(localStorage.getItem("all_data"));

let arr = [];

for (var i = 0; i < rawData.length; i++) {
  if (rawData[i].type === "New & Now")
    arr.push(rawData[i]);
}

display(arr);

function sortByCategory() {
  let value = document.querySelector("#categoryD").value;

  let filteredList = rawData.filter((elem) => {
    return elem.subtype === value;
  });
  display(filteredList);
}
document.getElementById("categoryD").addEventListener("change", sortByCategory);

function sortByName() {
  let value = document.querySelector("#sortByNmae").value;
  if (value === "") {
    display(arr);
  } else if (value === "acsending") {
    arr.sort(function (a, b) {
      let x = a.name.toUpperCase();
      let y = b.name.toUpperCase();

      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
    display(arr);
  } else if (value === "decsending") {
    arr.sort(function (a, b) {
      let x = a.name.toUpperCase();
      let y = b.name.toUpperCase();

      if (x > y) {
        return -1;
      }
      if (x < y) {
        return 1;
      }
      return 0;
    });
    display(arr);
  }
}
document.getElementById("sortByNmae").addEventListener("change", sortByName);

function sortByPrice() {
  let value = document.querySelector("#sortByPrice").value;
  if (value === "") {
    display(arr);
  } else if (value === "htl") {
    arr.sort((a, b) => {
      return b.price - a.price;
    });
    display(arr);
  } else if (value === "lth") {
    arr.sort((a, b) => {
      return a.price - b.price;
    });
    display(arr);
  }
}
document.getElementById("sortByPrice").addEventListener("change", sortByPrice);

function display(data){
let container=document.querySelector("#container_h");
container.innerHTML=null;
data.forEach(el => {
    
    let div = document.createElement('div')
    div.setAttribute('class','box_h')

    let image = document.createElement('img')
    image.src = el.image;
    image.addEventListener("click",function(){detail(el)})
    image.setAttribute('class','proImg_h')

    let name = document.createElement('a')
    name.setAttribute('class','name_h')
    name.innerText = el.name

    let subtype = document.createElement('p')
    subtype.setAttribute('class','name2_h')
    subtype.innerText = el.subtype;

    let price = document.createElement('p')
    price.innerText = `₹${el.price}`;
    price.setAttribute('class','pricepro_h')

    let button = document.createElement('button')
    button.setAttribute('class','probtn_h')
    button.innerText = 'Add To Cart'
    button.addEventListener('click',()=>{
        addToCart(el)
    })

    div.append(image,name,subtype,price,button)
    container.append(div)})
}

function detail(el){
    localStorage.setItem("product",JSON.stringify(el));
    window.location.href="../product detail/product_detail.html"
}

let cart=JSON.parse(localStorage.getItem("cart"))||[];
function addToCart(el){
cart.push(el);
localStorage.setItem("cart",JSON.stringify(cart));
window.location.reload();
}