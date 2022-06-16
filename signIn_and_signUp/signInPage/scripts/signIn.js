let input = document.querySelectorAll("input");
document.getElementById("submit").addEventListener("click", function () {
  borderChange("submit");
});

for (let k of input) {
  k.addEventListener("input", function () {
    // validateFunction(k.id);
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

let signInFunction = () => {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let validation = false;

  let object = {
    email: email,
    password: password,
  };

  let userData = JSON.parse(localStorage.getItem("userCred"));
  for (let i = 0; i < userData.length; i++) {
    if (
      userData[i].email == object.email &&
      userData[i].password == object.password
    ) {
      validation = true;
    }
  }

  if (validation) {
    alert("Login successfully...!");
    document.getElementById("email").value = null;
    document.getElementById("password").value = null;
    window.location.href = `.home.html`; // link home page here....
  } else {
    alert("Login failed...!Please enter correct details...");
  }
};
document.getElementById("submit").addEventListener("click", signInFunction);

let count = 0;
let showHideFunction = () => {
  event.preventDefault();
  let pass = document.getElementById("password").value;
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
