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

function myFunction(x) {
  x.classList.toggle("change");
  const menuDisplay = document.querySelector('.mobile-menu')
  const mobileSearch = document.querySelector('.search-content')
  menuDisplay.classList.toggle('active')
  mobileSearch.classList.toggle('active')
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
// signIn.forEach((sign) => {
//   sign.addEventListener("click", function () {
//     accountRequest.style.display = "block";
//     signInForm.style.display = "block";
//     login.style.display = "none";
//     header.style.display = "none";
//     signUpForm.style.display = "none";
//     // Close form
//     if (accountRequest.style.display == "block") {
//       window.onclick = function (event) {
//         if (event.target == accountRequest) {
//           accountRequest.style.display = "none";
//           header.style.display = "flex";
//         }
//       };
//     }
//   });
// });
// // Call up sign up form
// signUp.forEach((sign) => {
//   sign.addEventListener("click", function () {
//     accountRequest.style.display = "block";
//     signUpForm.style.display = "block";
//     login.style.display = "none";
//     header.style.display = "none";
//     signInForm.style.display = "none";
//     // Close form
//     if (accountRequest.style.display == "block") {
//       window.onclick = function (event) {
//         if (event.target == accountRequest) {
//           accountRequest.style.display = "none";
//           header.style.display = "flex";
//         }
//       };
//     }
//   });
// });

// Search
searchClick.addEventListener("focus", () => {
  searchDisplay.style.display = "block";
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
});
searchClick.addEventListener("input", searchFunction);
  function searchFunction() {
    console.log('function')
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

//Celebrity Profile page
function redirectToProfile(name, imgSrc, celebrityTag) {
  localStorage.setItem("celebrityName", name);
  localStorage.setItem("celebrityImage", imgSrc);
  localStorage.setItem("celebrityTag", celebrityTag);
  window.location.href = "./celebrity_profile_page.html";
}