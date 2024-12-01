

let loginEmailInput = document.querySelector("#loginEmail");
let loginPasswordInput = document.querySelector("#loginPassword");
let loginBtn = document.querySelector("#loginBtn");
let signupAnchor = document.querySelector("#signupAnchor");

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signIn() {
  let loginEmail = loginEmailInput.value;
  let loginPassword = loginPasswordInput.value;

  if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
    swal({
      text: "Please fill in all fields",
      icon: "error"
      
    });
    return;
  }

  if (isCorrectEmailAndPassword(loginEmail, loginPassword)) {
    window.location.href = "login.html";
   
  } else {
    swal({
      text: "Incorrect email or password",
      icon: "error"
    });
  }
}

function isCorrectEmailAndPassword(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}



loginBtn.addEventListener("click", function () {
  signIn();
});

signupAnchor.addEventListener("click", function () {
  window.location.href = "signup.html";
});
