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

function myFunction(x) {
  x.classList.toggle("change");
  const menuDisplay = document.querySelector('.mobile-menu')
  menuDisplay.classList.toggle('active')
  menuDisplay.style.height = "fit-content"
}

// Request to sign up on click
loginRequest.forEach((tap) => {
  tap.addEventListener("click", function () {
    login.style.display = "block";
    searchDisplay.style.display = "none";
    if (login.style.display == "block") {
      window.onclick = function (event) {
        if (event.target == login) {
          login.style.display = "none";
        }
      };
    }
  });
});
// Call up sign in form
signIn.forEach((sign) => {
  sign.addEventListener("click", function () {
    accountRequest.style.display = "block";
    signInForm.style.display = "block";
    login.style.display = "none";
    header.style.display = "none";
    signUpForm.style.display = "none";
    // Close form
    if (accountRequest.style.display == "block") {
      window.onclick = function (event) {
        if (event.target == accountRequest) {
          accountRequest.style.display = "none";
          header.style.display = "flex";
        }
      };
    }
  });
});
// Call up sign up form
signUp.forEach((sign) => {
  sign.addEventListener("click", function () {
    accountRequest.style.display = "block";
    signUpForm.style.display = "block";
    login.style.display = "none";
    header.style.display = "none";
    signInForm.style.display = "none";
    // Close form
    if (accountRequest.style.display == "block") {
      window.onclick = function (event) {
        if (event.target == accountRequest) {
          accountRequest.style.display = "none";
          header.style.display = "flex";
        }
      };
    }
  });
});
// Close form
const closeForms = document.querySelectorAll(".close-form");
closeForms.forEach((closeForm) => {
  closeForm.addEventListener("click", function () {
    if (accountRequest.style.display == "block") {
      window.onclick = function (event) {
        if (event.target == closeForm) {
          accountRequest.style.display = "none";
          header.style.display = "flex";
        }
      };
    }
  });
});

// Search
searchClick.addEventListener("focus", () => {
  searchDisplay.style.display = "block";
});

searchClick.addEventListener("input", searchFunction);
  function searchFunction() {
    const celebrity = document.getElementsByClassName("celebrity-search-id");
    const searchReturn = document.getElementsByClassName("recommended");
    const filter = searchClick.value.toUpperCase();
    const searchTittle = document.querySelector(".search-tittle");

    if (searchClick.value == "") {
      searchTittle.style.display = "block";
    } else {
      searchTittle.style.display = "none";
    }

    for (i = 0; i < celebrity.length; i++) {
      const celebrityName =
        document.getElementsByClassName("celebrity-name")[i];
      if (celebrityName.innerHTML.toUpperCase().indexOf(filter) > -1) {
        searchReturn[i].style.display = "";
      } else {
        searchReturn[i].style.display = "none";
      }
    }
  }


window.onclick = function (event) {
  if (
    !event.target.classList.contains("search-result") &&
    !event.target.classList.contains("search-input")
  ) {
    const searchResults = document.getElementsByClassName("search-result");
    if ((searchResults.display = "block")) {
      searchDisplay.style.display = "none";
      searchClick.value = "";
    }
  }
};

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
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    console.log("form submitted");
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("storedPassword"));
  }
}
password.addEventListener("input", eyeicon);
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
confirmPassword.addEventListener("input", cpEye);
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
password2.addEventListener("input", passWord2);
function passWord2() {
  signinEyeIcon.style.display = "block";
  signinEyeIcon.onclick = () => {
    if (password2.type === "password") {
      password2.type = "text";
      signinEyeIcon.classList.remove("fa-eye");
      signinEyeIcon.classList.add("fa-eye-slash");
      console.log("eye");
    } else {
      password2.type = "password";
      signinEyeIcon.classList.add("fa-eye");
      signinEyeIcon.classList.remove("fa-eye-slash");
    }
  };
}

form2.addEventListener("submit", form2Validation);
function form2Validation(event) {
  event.preventDefault();
  isValid = true;
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => (error.textContent = ""));

  const mail2Mssg = document.querySelector(".mail2-mssg");
  if (mail2.value == "") {
    mail2Mssg.innerHTML = "Please enter your username";
    mail2Mssg.classList.add("mssg");
    isValid = false;
  }
  const password2Mssg = document.querySelector(".password2-mssg");
  if (password2.value == "") {
    password2Mssg.innerHTML = "Please enter password";
    password2Mssg.classList.add("mssg");
    isValid = false;
  }
  if (
    mail2.value == localStorage.getItem("email") &&
    password2.value == localStorage.getItem("storedPassword")
  ) {
    window.location.href = "./user-page.html";
  } else {
    mail2Mssg.innerHTML = "User not recognized";
    mail2Mssg.classList.add("mssg");
    isValid = false;
  }
}
//Celebrity Profile page
function redirectToProfile(name, imgSrc, celebrityTag) {
  localStorage.setItem("celebrityName", name);
  localStorage.setItem("celebrityImage", imgSrc);
  localStorage.setItem("celebrityTag", celebrityTag);
  window.location.href = "./celebrity_profile_page.html";
}