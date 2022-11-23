const signupForm = document.getElementById('js-signupForm');
const successMessage = document.getElementById('js-successMessage');
const signupButton = document.getElementById('js-signupButton');
const signupButtonMessage = document.getElementById('js-signupButtonMessage');
const successButtonMessage = document.getElementById('js-successButtonMessage');
const signupButtonLabel = 'submit form';
const successButtonLabel = 'go back';

const toggleSignupView = function(e) {
  e.preventDefault();
  const initialAriaHiddenValue = signupForm.getAttribute('aria-hidden');
  const convertedAriaHiddenValue = (initialAriaHiddenValue === 'true');
  const reversedAriaHiddenValue = (!convertedAriaHiddenValue).toString();
  
  signupForm.setAttribute('aria-hidden', reversedAriaHiddenValue);
  signupButtonMessage.setAttribute('aria-hidden', reversedAriaHiddenValue);
  successMessage.setAttribute('aria-hidden', initialAriaHiddenValue);
  successButtonMessage.setAttribute('aria-hidden', initialAriaHiddenValue);

  if (convertedAriaHiddenValue === true) {
    e.target.setAttribute('aria-label', successButtonLabel);
  } else {
    e.target.setAttribute('aria-label', signupButtonLabel);
  }
};

signupButton.addEventListener('click', toggleSignupView);