const registrationForm = document.getElementById("form-registration");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = [];
  let username = document.getElementById("username").value;

  if (username == "") {
    errors.push({
      field: "username",
      message: "Username can not be empty"
    });
  }

  let usernameRegex = /^[a-zA-Z0-9]{6,}$/;

  if (!usernameRegex.test(username)) {
    errors.push({
      field: "username",
      message: "Username is not valid (should be at least 6 characters long and contain only letters and numbers)"
    });
  }

  let password = document.getElementById("password").value;
  let passwordRpt = document.getElementById("password-rpt").value;

  if (password == "") {
    errors.push({
      field: "password",
      message: "Password can not be empty"
    });
  }

  if (passwordRpt != password) {
    errors.push({
      field: "password-rpt",
      message: "Passwords do not match"
    });
  }

  let email = document.getElementById("email").value;

  if (email == "") {
    errors.push({
      field: "email",
      message: "Email can not be empty"
    });
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errors.push({
      field: "email",
      message: "Email is not valid"
    });
  }

  let gender = null;

  if (document.getElementById("gender-male").checked) {
    gender = "Male";
  } else if (document.getElementById("gender-female").checked) {
    gender = "Female";
  }

  if (gender == null) {
    errors.push({
      field: "gender",
      message: "Gender is not selected"
    });
  }

  let agreeWithTerms = document.getElementById("terms-and-cond-check").checked;

  if (!agreeWithTerms) {
    errors.push({
      field: "terms-and-cond-check",
      message: "You must agree with our terms and conditions"
    });
  }

  for (const el of document.getElementsByClassName("error-text")) {
    el.textContent = "";
  }

  for (const error of errors) {
    let errorField = document.getElementById(`error-${error.field}`);
    errorField.textContent = error.message;
  }

  if (errors.length == 0) {
    registrationForm.submit();
  }
});

function showHidePassword () {
  let password = document.getElementById("password");
  let passwordRpt = document.getElementById("password-rpt");

  if (password.type === "password") {
    password.type = "text";
    passwordRpt.type = "text";
  } else {
    password.type = "password";
    passwordRpt.type = "password";
  }
}
