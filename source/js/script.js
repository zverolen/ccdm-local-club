const signupForm = document.getElementById('js-signupForm');
const successMessage = document.getElementById('js-successMessage');
const buttons = document.querySelectorAll('button');
const signupButton = document.getElementById('js-signupButton');
const successButton = document.getElementById('js-successButton');

const toggleSignupView = function(event) {
  event.preventDefault();

  const initialAriaHiddenValue = signupForm.getAttribute('hidden');
  
  signupForm.toggleAttribute('hidden');
  signupButton.toggleAttribute('hidden');
  successMessage.toggleAttribute('hidden');
  successButton.toggleAttribute('hidden');
};

buttons.forEach((button) => {
  button.addEventListener('click', toggleSignupView); 
});