const password2 = document.querySelector("#password-input2");

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
password2.addEventListener("input", passWord2);

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
form2.addEventListener("submit", form2Validation);
