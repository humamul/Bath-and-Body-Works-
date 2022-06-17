import {navbar_h} from "../navbar/script/navbar";
document.querySelector("#navbar_s").innerHTML=navbar_h();
import {footer} from "../navbar/script/footer";
document.querySelector("#footer").innerHTML=footer();

let data=JSON.parse(localStorage.getItem("product"));
console.log('AAja bhai')
let big_img=document.querySelector("#big_img");
let img1=document.createElement("img");img1.src=data.image;
big_img.append(img1)

let small_img=document.querySelector("#small_img");
let img2=document.createElement("img");img2.src=data.image;
small_img.append(img2)

//let div_det=document.createElement("div");
let name=document.createElement("h1");name.innerText=data.name;
let subtype=document.createElement("p");subtype.innerText=data.subtype;
let type=document.createElement("p");type.innerText=data.type;
let price=document.createElement("p");price.innerText=data.price+"  rs";
price.style.textDecoration="line-Through"
let real_price=document.createElement("p");real_price.innerText="MRP :  "+data.realPrice+"  RS";
let div_price=document.createElement("div");div_price.style.display="flex";

div_price.style.width="25%"
div_price.style.justifyContent="space-Between"
div_price.append(real_price,price)


let size=document.createElement("p");size.innerText=data.size;
let offer=document.createElement("p");offer.innerText="Mix & Match: Buy 3,Get 1";offer.style.color="#EF5F96";

document.querySelector("#info").append(name,subtype,type,div_price,size,offer)

document.querySelector("#fragrance").innerText=data.fragrance;

document.querySelector("#add_to_cart").addEventListener("click",function(){
add(data);
})
let arr=JSON.parse(localStorage.getItem("cart"))||[];

function add(data){
let quant=document.querySelector("#quantity").value;
data.quantity=quant;
arr.push(data);
localStorage.setItem("cart",JSON.stringify(arr));

window.location.reload();
}

let pincode=document.querySelector("#pincode").value;
document.querySelector("#check").addEventListener("click",check);
function check(){
    if(pincode.length<6){alert("Invalid Pincode")}
    else{alert("Your delivery will be deiver within 7 days..")}
}

