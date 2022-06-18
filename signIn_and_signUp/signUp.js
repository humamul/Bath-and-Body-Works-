let input = document.querySelectorAll("input");
document.getElementById("submit").addEventListener("click", function () {
  borderChange("submit");
});

for (let k of input) {
  let helloD;
  if (k.id === "submit") {
    helloD = document.getElementById(`${k.id}`);
    console.log(k.id);
  } else if (k.id === "password") {
    helloD = document.getElementById(`${k.id}`).parentElement.parentElement;
  } else {
    helloD = document.getElementById(`${k.id}`).parentElement;
  }
  helloD.style.border = "0px";
  helloD.style.padding = "0px";

  k.addEventListener("input", function () {
    validateFunction(k.id);
  });
  k.addEventListener("click", function () {
    borderChange(k.id);
  });
}

let borderChange = (id) => {
  let helloD;
  if (id === "submit") {
    helloD = document.getElementById(`${id}`);
  } else if (id === "password") {
    helloD = document.getElementById(`${id}`).parentElement.parentElement;
  } else {
    helloD = document.getElementById(`${id}`).parentElement;
  }
  helloD.style.border = "1px dotted black";
  helloD.style.padding = "2px";
};

var f_Name = false;
var fNameD;
var l_name = false;
var lNameD;
var e_mail = false;
var eMail;
var c_mail = false;
var z_code = false;
var zCode;
let ph_Num = false;
var number;
var pwd = false;
var pass;
let validateFunction = (id) => {
  if (id === "firstName") {
    let firstName = document.getElementById(`${id}`).value;
    if (firstName === "") {
      document.querySelector(`#${id}~p`).innerText =
        "Please enter a first name.";
      f_Name = false;
    } else {
      document.querySelector(`#${id}~p`).innerText = "";
      fNameD = document.getElementById(`${id}`).value;
      f_Name = true;
    }
  }

  if (id === "lastName") {
    let lastName = document.getElementById(`${id}`).value;
    if (lastName === "") {
      document.querySelector(`#${id}~p`).innerText =
        "Please enter a last name.";
      l_name = false;
    } else {
      document.querySelector(`#${id}~p`).innerText = "";
      lNameD = document.getElementById(`${id}`).value;
      l_name = true;
    }
  }

  if (id === "email") {
    let email = document.getElementById(`${id}`).value;
    if (email === "") {
      document.querySelector(`#${id}~p`).innerText =
        "Please enter an email address.";
      e_mail = false;
    } else {
      if (email.includes("@") && email.includes(".com")) {
        document.querySelector(`#${id}~p`).innerText = "";
        eMail = document.getElementById(`${id}`).value;
        e_mail = true;
      } else {
        document.querySelector(`#${id}~p`).innerText =
          "Oops! Your email must be in the format of name@domain.com.";
        e_mail = false;
      }
    }
  }

  if (id === "confirmEmail") {
    let confirmEmail = document.getElementById(`${id}`).value;
    if (confirmEmail === "") {
      document.querySelector(`#${id}~p`).innerText =
        "Please enter a last name.";
      c_mail = false;
    } else {
      if (confirmEmail === eMail) {
        document.querySelector(`#${id}~p`).innerText = "";
        c_mail = true;
      } else {
        document.querySelector(`#${id}~p`).innerText =
          "Your email addresses don't match. Please try again.";
        c_mail = false;
      }
    }
  }

  if (id === "zipCode") {
    let zipCode = document.getElementById(`${id}`).value;
    if (zipCode === "") {
      document.querySelector(`#${id}~p`).innerText =
        "Please enter a zip/postal code.";
      z_code = false;
    } else {
      if (zipCode.length === 6) {
        document.querySelector(`#${id}~p`).innerText = "";
        zCode = document.getElementById(`${id}`).value;
        z_code = true;
      } else {
        document.querySelector(`#${id}~p`).innerText =
          "Please enter a valid ZIP/Postal code.";
        z_code = false;
      }
    }
  }

  if (id === "phone") {
    let phone = document.getElementById(`${id}`).value;
    if (phone === "") {
      document.querySelector(`#${id}~p`).innerText = "This field is required.";
      ph_Num = false;
    } else {
      if (phone.length === 10) {
        document.querySelector(`#${id}~p`).innerText = "";
        number = document.getElementById(`${id}`).value;
        ph_Num = true;
      } else {
        document.querySelector(`#${id}~p`).innerText =
          "Please enter a valid phone number..";
        ph_Num = false;
      }
    }
  }

  if (id === "password") {
    let password = document.getElementById(`${id}`).value;
    if (password === "") {
      document.querySelector(`#pass`).innerText = "This field is required.";
      pass = document.getElementById(`${id}`).value;
      pwd = false;
    } else {
      if (password.length < 8) {
        document.querySelector(`#pass`).innerText =
          "Enter at least 8 Characters.";
        pass = document.getElementById(`${id}`).value;
        pwd = false;
      } else {
        document.querySelector(`#pass`).innerText = "";
        pass = document.getElementById(`${id}`).value;
        pwd = true;
      }
    }
  }

  if (f_Name && l_name && e_mail && c_mail && z_code && ph_Num && pwd) {
    let div = document.getElementById("submit");
    div.style.backgroundColor = "black";
    div.style.color = "white";
    div.style.cursor = "pointer";
    div.addEventListener("click", getUserData);
  }
};

let count = 0;
let showHideFunction = () => {
  event.preventDefault();
  let showHide = document.getElementById("password");
  if (pass === undefined) {
    return false;
  } else {
    if (count % 2 == 0) {
      showHide.type = "text";
      showHide.value = pass;
    } else {
      showHide.type = "password";
      showHide.value = pass;
    }
    count++;
  }
};
document
  .querySelector("#password~button")
  .addEventListener("click", showHideFunction);

let getUserData = () => {
  let userArr = JSON.parse(localStorage.getItem("userCred")) || [];
  let userObj = {
    firstName: fNameD,
    lastName: lNameD,
    email: eMail,
    zipCode: zCode,
    number: number,
    password: pass,
  };

  userArr.push(userObj);
  localStorage.setItem("userCred", JSON.stringify(userArr));
  window.location.href = `../signInPage/signIn.html`;
};

import { navbar_h } from "../navbar/script/navbar.js";
import { footer } from "../navbar/script/footer.js";

document.getElementById("navbarD").innerHTML = navbar_h();
document.getElementById("footerD").innerHTML = footer();
