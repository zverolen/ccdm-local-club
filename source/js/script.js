const signupForm = document.getElementById('js-signupForm');
const successMessage = document.getElementById('js-successMessage');
const buttons = document.querySelectorAll('button');
const signupButton = document.getElementById('js-signupButton');
const successButton = document.getElementById('js-successButton');

const toggleSignupView = function(event) {
  event.preventDefault();
  const initialAriaHiddenValue = signupForm.getAttribute('aria-hidden');
  const convertedAriaHiddenValue = (initialAriaHiddenValue === 'true');
  const reversedAriaHiddenValue = (!convertedAriaHiddenValue).toString();
  
  signupForm.setAttribute('aria-hidden', reversedAriaHiddenValue);
  signupButton.setAttribute('aria-hidden', reversedAriaHiddenValue);
  successMessage.setAttribute('aria-hidden', initialAriaHiddenValue);
  successButton.setAttribute('aria-hidden', initialAriaHiddenValue);
};

buttons.forEach((button) => {
  button.addEventListener('click', toggleSignupView); 
});