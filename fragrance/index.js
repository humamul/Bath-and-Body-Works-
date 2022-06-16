let rawData = JSON.parse(localStorage.getItem("all_data"));

let arr = [];

for (var i = 0; i < rawData.length; i++) {
  if (rawData[i].type === "Air Freshers" || rawData[i].type === "Fragrance")
    arr.push(rawData[i]);
}

localStorage.setItem("sortedData", JSON.stringify(arr));

let arr1 = JSON.parse(localStorage.getItem("sortedData"));

import { append } from "../importFrom/products.js";
let container = await document.getElementById("containerD");

let displayData = async (data) => {  
  append(container, data);console.log(data);
};
displayData(arr1);

async function sortByCategory() {
  let value = await document.querySelector("#categoryD").value;

  let filteredList = await arr1.filter((elem) => {
    return elem.subtype === value;
  });
  displayData(filteredList);
}
document.getElementById("categoryD").addEventListener("change", sortByCategory);

function sortByName() {
  let value = document.querySelector("#sortByNmae").value;
  if (value === "") {
    displayData(arr1);
  } else if (value === "acsending") {
    arr1.sort(function (a, b) {
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
    displayData(arr1);
  } else if (value === "decsending") {
    arr1.sort(function (a, b) {
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
    displayData(arr1);
  }
}
document.getElementById("sortByNmae").addEventListener("change", sortByName);

function sortByPrice() {
  let value = document.querySelector("#sortByPrice").value;
  if (value === "") {
    displayData(arr1);
  } else if (value === "htl") {
    arr1.sort((a, b) => {
      return b.price - a.price;
    });
    displayData(arr1);
  } else if (value === "lth") {
    arr1.sort((a, b) => {
      return a.price - b.price;
    });
    displayData(arr1);
  }
}
document.getElementById("sortByPrice").addEventListener("change", sortByPrice);