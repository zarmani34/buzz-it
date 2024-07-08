const header = document.querySelector("header");
const headerbtn = document.querySelector(".header-button");
const userInfo = document.querySelector(".user-info");
const searchClick = document.querySelector(".search-input");
const searchDisplay = document.querySelector(".search-result");
const signUp = document.querySelectorAll(".create-acct");
const signUpForm = document.querySelector(".sign-up");
const signIn = document.querySelectorAll(".login-btn");
const signInForm = document.querySelector(".sign-in");
const login = document.querySelector(".login-modal");
const loginRequest = document.querySelectorAll(".login-link");
const accountRequest = document.querySelector(".account-request");
const signInButton = document.querySelector(".sign-in-submit");
const mssg = document.querySelector(".mssg");
const displayNone = document.querySelector(".display-none");
const fullName = document.querySelector("#full-name-input");
const mail = document.querySelector("#mail-sign-up-input");
const birthday = document.getElementById("birthday-input");
const password = document.querySelector("#password-input1");
const confirmPassword = document.querySelector("#confirm-password");
const eyeIcon = document.querySelector(".eye-icon");
const cpEyeIcon = document.querySelector(".cp-eye-icon");
const signinEyeIcon = document.querySelector(".signin-eye-icon");
const mail2 = document.querySelector("#mail-input");
const password2 = document.querySelector("#password-input2");

// Sign up form validation
form1.addEventListener("submit", form1Validation);
function form1Validation(event) {
  event.preventDefault();

  // Full name validation
  const fullName = document.querySelector("#full-name-input");
  const nameMssg = document.querySelector(".name-mssg");
  const fullNameRegex = /^[a-zA-Z ]+$/;
  const nameParts = fullName.value.split(" ");

  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => (error.textContent = ""));
  isValid = true;

  if (fullName.value == "") {
    nameMssg.innerHTML = "Please enter your name";
    nameMssg.classList.add("mssg");
    isValid = false;
  } else if (!fullNameRegex.test(fullName.value)) {
    nameMssg.innerHTML = "Please enter a valid name";
    nameMssg.classList.add("mssg");
    isValid = false;
  } else if (nameParts.length < 2) {
    nameMssg.innerHTML = "Please enter a real name";
    nameMssg.classList.add("mssg");
    isValid = false;
  }

  // Email validation
  const mail = document.querySelector("#mail-sign-up-input");
  const mailMssg = document.querySelector(".mail-mssg");
  const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (mail.value == "") {
    mailMssg.innerHTML = "Email field is required";
    mailMssg.classList.add("mssg");
    isValid = false;
  } else if (!mailRegex.test(mail.value)) {
    mailMssg.innerHTML = "Valid email required";
    mailMssg.classList.add("mssg");
    isValid = false;
  } else if (mail.value.length <= 11) {
    mailMssg.innerHTML = "Email should be more than 12 characters";
    mailMssg.classList.add("mssg");
    isValid = false;
  } else if (mail.value !== mail.value.toLowerCase()) {
    mailMssg.innerHTML = "Email must be in lowercase letters.";
    mailMssg.classList.add("mssg");
    isValid = false;
  }

  // Birthday validation
  const birthday = document.getElementById("birthday-input");
  const birthdayMssg = document.querySelector(".birthday-mssg");
  const dob = birthday.value;
  const date = new Date();
  if (birthday.value == "") {
    birthdayMssg.innerHTML = "Please enter your DOB";
    birthdayMssg.classList.add("mssg");
    isValid = false;
  }

  //Password validation
  const passwordMssg = document.querySelector(".password-mssg");
  if (password.value == "") {
    passwordMssg.innerHTML = "Password required";
    passwordMssg.classList.add("mssg");
    isValid = false;
  } else if (password.value.length <= 7) {
    passwordMssg.innerHTML = "Password must be at least 8 characters";
    passwordMssg.classList.add("mssg");
    isValid = false;
  } else if (!/[A-Z]/.test(password.value)) {
    passwordMssg.innerHTML =
      "Password must contain at least one uppercase letter.";
    passwordMssg.classList.add("mssg");
    isValid = false;
  } else if (!/[a-z]/.test(password.value)) {
    passwordMssg.innerHTML =
      "Password must contain at least one lowercase letter.";
    passwordMssg.classList.add("mssg");
    isValid = false;
  } else if (!/\d/.test(password.value)) {
    passwordMssg.innerHTML = "Password must contain at least one number.";
    passwordMssg.classList.add("mssg");
    isValid = false;
  } else if (!/[!@#$%^&*(),.:"{}|<>]/.test(password.value)) {
    passwordMssg.innerHTML =
      "Password must contain at least one special character.";
    passwordMssg.classList.add("mssg");
    isValid = false;
  }

  // Confirm password
  const confirmPasswordMssg = document.querySelector(".confirm-password-mssg");
  if (confirmPassword.value == "") {
    confirmPasswordMssg.innerHTML = "please confirm password";
    confirmPasswordMssg.classList.add("mssg");
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordMssg.innerHTML = "Password must be the same";
    confirmPasswordMssg.classList.add("mssg");
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("email", mail.value);
    localStorage.setItem("storedPassword", password.value);
    console.log("form submitted");
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("storedPassword"));
    window.location.href = "./sign-in.html";
  }
}
function eyeicon() {
    eyeIcon.style.display = "block";
    eyeIcon.onclick = () => {
        if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.remove("fa-eye");
            eyeIcon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        eyeIcon.classList.add("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }
};
}
password.addEventListener("input", eyeicon);
function cpEye() {
    cpEyeIcon.style.display = "block";
    cpEyeIcon.onclick = () => {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            cpEyeIcon.classList.remove("fa-eye");
            cpEyeIcon.classList.add("fa-eye-slash");
            console.log("eye");
        } else {
            confirmPassword.type = "password";
            cpEyeIcon.classList.add("fa-eye");
      cpEyeIcon.classList.remove("fa-eye-slash");
    }
  };
}
confirmPassword.addEventListener("input", cpEye);