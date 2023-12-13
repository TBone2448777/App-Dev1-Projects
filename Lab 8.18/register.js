function checkForm() {
   let fName = document.getElementById("fullName");
   let email = document.getElementById("email");
   let pass = document.getElementById("password");
   let passCon = document.getElementById("passwordConfirm");
   let errors = document.getElementById("formErrors");
   let errorCount = 0;
   let html = "<ul>";
   fName.classList.remove("error");
   email.classList.remove("error");
   pass.classList.remove("error");
   passCon.classList.remove("error");
   if (fName.value.length <= 1){
      errorCount++;
      html += "<li>Missing full name.</li>"
      fName.classList.add("error");
   }
   if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)){
      errorCount++;
      html += "<li>Invalid or missing email address.</li>"
      email.classList.add("error");
   }
   if (10 > pass.value.length || 20 < pass.value.length){
      errorCount++;
      html += "<li>Password must be between 10 and 20 characters.</li>"
      pass.classList.add("error");
   }
   if (!/[a-z]/.test(pass.value)){
      errorCount++;
      html += "<li>Password must contain at least one lowercase character.</li>"
      pass.classList.add("error");
   }
   if (!/[A-Z]/.test(pass.value)){
      errorCount++;
      html += "<li>Password must contain at least one uppercase character.</li>"
      pass.classList.add("error");
   }
   if (!/\d/.test(pass.value)){
      errorCount++;
      html += "<li>Password must contain at least one digit.</li>"
      pass.classList.add("error");
   }
   if (pass.value != passCon.value){
      errorCount++;
      html += "<li>Password and confirmation password don't match.</li>"
      passCon.classList.add("error");
   }
   html += "</ul>";
   if (errorCount > 0){
      errors.innerHTML = html;
      errors.classList.remove("hide");
   } else {
      errors.innerHTML = "";
      errors.classList.add("hide");
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();
   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});

// Ensure a full name with a length greater than or equal to 1 was provided
// Otherwise, display "Missing full name."
// Ensure that an email address was provided and that the email address matches the regular expression:
// /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
// Otherwise, display "Invalid or missing email address."
// Ensure the password has 10 to 20 characters
// Otherwise, display "Password must be between 10 and 20 characters."
// Ensure the password contains at least one lowercase character (use a regular expression)
// Otherwise, display "Password must contain at least one lowercase character."
// Ensure the password contains at least one uppercase character (use a regular expression)
// Otherwise, display "Password must contain at least one uppercase character."
// Ensure the password contains at least one digit (use a regular expression)
// Otherwise, display "Password must contain at least one digit."
// Ensure the password and confirmation password match
// Otherwise, display "Password and confirmation password don't match."