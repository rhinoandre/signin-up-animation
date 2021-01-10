const overlay = document.querySelector('.overlay');
const signUpMessage = document.querySelector('.signup');
const signInMessage = document.querySelector('.signin');

let isSignInVisible = true;

function moveOverlay(isSignInVisible) {
  if (isSignInVisible) {
    overlay.classList.add('signup-active');
    overlay.classList.remove('signin-active');
  } else {
    overlay.classList.add('signin-active');
    overlay.classList.remove('signup-active');
  }
}

function switchSignMethod() {
  overlay.classList.remove('no-animation');

  moveOverlay(isSignInVisible);

  isSignInVisible = !isSignInVisible;
}

document
  .querySelector('#switch-sign-method')
  .addEventListener('click', switchSignMethod);
