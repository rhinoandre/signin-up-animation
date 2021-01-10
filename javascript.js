const overlay = document.querySelector('.overlay');

function hideSignIn() {
  overlay.classList.remove('no-animation');
  overlay.classList.add('hide-right');
}

function hideSignUp() {
  overlay.classList.remove('hide-right');
}

document.querySelector('#signin').addEventListener('click', hideSignUp);
document.querySelector('#signup').addEventListener('click', hideSignIn);
