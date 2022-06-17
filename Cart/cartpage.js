// let data = [
//     {
//         image:"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4861f8f9/large/024491265.jpg",
//         name:"A THOUSAND WISHES",
//         price: 1399,
//         realPrice:839,
//     },
//     {
//         image:"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4861f8f9/large/024491265.jpg",
//         name:"A THOUSAND WISHES",
//         price: 1399,
//         realPrice:839,
//     },
//     {
//         image:"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4861f8f9/large/024491265.jpg",
//         name:"A THOUSAND WISHES",
//         price: 1399,
//         realPrice:839,
//     },
//     {
//         image:"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4861f8f9/large/024491265.jpg",
//         name:"A THOUSAND WISHES",
//         price: 1399,
//         realPrice:839,
//     },
//     {
//         image:"https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4861f8f9/large/024491265.jpg",
//         name:"A THOUSAND WISHES",
//         price: 1399,
//         realPrice:839,
//     }
// ]

let data = JSON.parse(localStorage.getItem("data")) || [];

cartData(data);

let mrp = document.getElementById("m_value");
let order_a = document.getElementById("o_value");
let order_total = document.getElementById("t_value");

function cartData(data) {
  var total_mrp = 0;
  var total_discount = 0;
  var total_o_amount = 0;
  var shippingcharge = 150;
  //   var shippedcharge = 0
  let tmrp = document.getElementById("m_value");

  let order_amount = document.getElementById("o_value");

  let discount = document.getElementById("d_value");

  let final = document.getElementById("t_value");

  let shippedcharge = document.getElementById('s_value');

  let left = document.getElementById("left");

  data.forEach((el, i) => {
    // console.log(el);
    let p_div = document.createElement("div");
    p_div.setAttribute("class", "Pro_data");

    // Left div is for image and Quantity and remove button

    let left1 = document.createElement("div");
    left1.setAttribute("class", "left");
    // for product image

    let imgdiv = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;
    img.setAttribute("id", "p_image");
    imgdiv.append(img); // Append to left

    //  for product details like name and quantity

    let details = document.createElement("div");
    details.setAttribute("class", "details");

    let p_name = document.createElement("p");
    p_name.innerText = el.name;

    let q_div = document.createElement("div");

    let qty = document.createElement("label");
    qty.innerText = "QTY: " + el.quantity;

    q_div.append(qty);

    let remove = document.createElement("button");
    remove.innerText = "REMOVE";
    remove.setAttribute("id", "remove");
    remove.addEventListener("click", function () {
      data.splice(i, 1);
      localStorage.setItem("data", JSON.stringify(data));
      window.location.reload();
    });

    details.append(p_name, q_div, remove); // Append to left

    left1.append(imgdiv, details); // Append to p_div

    let left2 = document.createElement("div");
    left2.setAttribute("class", "right");

    let item_div = document.createElement("div");

    let each = document.createElement("p");
    each.innerText = "EACH ITEM";

    let price = document.createElement("p");

    let sprice = document.createElement("s");
    sprice.innerText = el.price;
    price.append(sprice);

    let rp = document.createElement("p");
    rp.innerText = el.realPrice;

    item_div.append(each, price, rp); // append to right


    let total_div = document.createElement("div");
    total_div.setAttribute("id", "total_div");

    let total = document.createElement("p");
    total.innerText = "TOTAL";

    let t_price = document.createElement("s");
    t_price.setAttribute("id", "t_price");
    t_price.innerText = el.price*(+el.quantity);

    total_mrp = total_mrp + el.price*(+el.quantity)
    tmrp.innerText = total_mrp

    let r_price = document.createElement("p");
    r_price.setAttribute("id", "r_price");
    r_price.innerText = el.realPrice*(+el.quantity);

    total_o_amount += el.realPrice*(+el.quantity)
    order_amount.innerText = total_o_amount

    if(total_o_amount<1500){
      shippedcharge.innerText = shippingcharge
      final.innerText = total_o_amount + shippingcharge
    }
    if(total_o_amount>1500){
      shippedcharge.innerText = 0
      final.innerText = total_o_amount
    }

    total_discount += el.price*(+el.quantity) - el.realPrice*(+el.quantity)
    discount.innerText = total_discount
    total_div.append(total, t_price, r_price); // append to right

    left2.append(item_div, total_div); // append to p_div

    p_div.append(left1, left2);

    left.append(p_div);
  });

  let addmore = document.createElement("div");
  addmore.setAttribute("id", "wishlist");

  let info = document.createElement("div");

  let imgdivw = document.createElement("div");
  let img = document.createElement("img");
  img.src =
    "https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw0adcc6e5/images/heart.svg";

  let h3 = document.createElement("h3");
  h3.innerText = "Add More From Wishlist";
  imgdivw.append(img, h3);

  let arr = document.createElement("img");
  arr.src =
    "https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw2fa318e6/images/bx_bx-chevron-down.svg";

  info.append(imgdivw, arr);
  addmore.append(info);
  left.append(addmore);
}
let dis = document.getElementById("d_value");
// dis.innerText = mrp.innerText-order_a.innerText

let x = document.querySelector(".details>div>select")
x.addEventListener("change",SelectFun)


function SelectFun(){

    console.log(x.value)
}
  









//     let oprice = document.getElementById("t_price");
//   oprice.innerText = x.value * el.price;
//   console.log(oprice);
//   document.getElementById("r_price").innerText = x.value * el.realPrice;
  //   console.log()
  //   total_mrp = total_mrp + x.value*el.price

  //   total_o_amount = total_o_amount + x.value*el.realPrice

  //   total_discount = total_mrp - total_o_amount
  //   order_total.innerText = order_a.innerText
