'use strict';

const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('confirm password');
const btnSubmit = document.getElementById('btnSubmit');

// display error message and success message
// error message
const showErrorMessage = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.textContent = message;
};
// success message
const showSuccessMessage = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};
// validating email address
const isValidEmail = input => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (re.test(String(input.value.trim()))) {
    showSuccessMessage(input);
  } else {
    showErrorMessage(input, 'Email address not valid');
  }
};

// checking validations for
const inputFieldName = input => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
const checkElementValue = inputArray => {
  inputArray.forEach(input => {
    if (input.value.trim() === '') {
      showErrorMessage(input, `${inputFieldName(input)} is required`);
    } else {
      showSuccessMessage(input);
    }
  });
};
// checking length of characters
const checkElementValueLength = (input, min, max) => {
  if (input.value.trim().length < min) {
    showErrorMessage(
      input,
      `${inputFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.trim().length > max) {
    showErrorMessage(
      input,
      `${inputFieldName(input)} must be less than ${max} characters`
    );
  }
};
// check if passwords are matching
const checkPasswords = (input1, input2) => {
  if (input1.value !== input2.value) {
    showErrorMessage(input2, `Passwords do not match`);
  }
};
//
// clear fields
// const clearFields = () => {
//   userName.value = '';
//   email.value = '';
//   password.value = '';
//   passwordConfirmation.value = '';
// };

// listeners

form.addEventListener('submit', function (event) {
  event.preventDefault();

  checkElementValue([userName, email, password, passwordConfirmation]);
  isValidEmail(email);
  checkElementValueLength(userName, 3, 15);
  checkElementValueLength(password, 6);
  checkElementValueLength(passwordConfirmation, 6);
  checkPasswords(password, passwordConfirmation);
});
