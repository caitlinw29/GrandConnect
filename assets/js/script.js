const signupText = document.getElementById("signup-text");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.getElementById("sign-in");

function login(e) {
  //!!We aren't storing anything in a database yet, this is just a prototype. So as long as they type something in both fields, it signs in
  e.preventDefault();
  if (!emailInput.value){
    signupText.textContent = `Incorrect email!`;
  } else if (!passwordInput.value){
    signupText.textContent = `Incorrect password!`;
  } else {
    location.assign('../pages/main-menu.html')
  }
}

form.addEventListener('submit', login);