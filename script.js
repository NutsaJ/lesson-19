const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
const emailErrorMsg = document.getElementById("emailErrorMsg");
const passwordErrorMsg = document.getElementById("passwordErrorMsg");
const form = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");
const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const validateEmail = () => {
  const validEmail = emailRegex.test(emailInput.value);
  if (!validEmail) {
    submitBtn.disabled = true;
    emailErrorMsg.classList.add("d-block");
    emailErrorMsg.classList.remove("d-none");
  } else {
    submitBtn.disabled = false;
    emailErrorMsg.classList.add("d-none");
    emailErrorMsg.classList.remove("d-block");
  }
  return validEmail;
};

const validatePassword = () => {
  const validPassword = passwordInput.value.length >= 8;
  if (!validPassword) {
    submitBtn.disabled = true;
    passwordErrorMsg.classList.add("d-block");
    passwordErrorMsg.classList.remove("d-none");
  } else {
    submitBtn.disabled = false;
    passwordErrorMsg.classList.add("d-none");
    passwordErrorMsg.classList.remove("d-block");
  }
  return validPassword;
};

emailInput.addEventListener("change", validateEmail);
passwordInput.addEventListener("change", validatePassword);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validEmail = validateEmail();
  if (!validEmail) return;
  const validPassword = validatePassword();
  if (!validPassword) return;
  alert("successfully logged in");
  form.reset();
});