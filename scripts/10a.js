/*
function toggleButton(button) {
  if (document.querySelector(button).classList.contains('is-toggled')) {
    document.querySelector(button).classList.remove('is-toggled');
  } else {
    document.querySelector(button).classList.add('is-toggled');
  }
  console.log(document.querySelector(button).classList.contains('is-toggled'));
}
*/
/*
function toggleButton(button) {
  if ((document.querySelector(button).classList.contains('is-toggled') 
    || document.querySelector('.js-gaming-button').classList.contains('is-toggled')
    || document.querySelector('.js-music-button').classList.contains('is-toggled')
    || document.querySelector('.js-tech-button').classList.contains('is-toggled')) === false) {
    document.querySelector(button).classList.add('is-toggled');
  } else {
    document.querySelector(button).classList.remove('is-toggled');
  }
  console.log(document.querySelector(button).classList.contains('is-toggled'));
}
*/
/*
function toggleButton(button) {
  if ((document.querySelector(button).classList.contains('is-toggled') 
    || document.querySelector('.js-gaming-button' || '.js-music-button' || '.js-tech-button').classList.contains('is-toggled')) === false) {
    document.querySelector(button).classList.add('is-toggled');
  } else {
    document.querySelector(button).classList.remove('is-toggled');
  }
  console.log(document.querySelector(button).classList.contains('is-toggled'));
}
*/

function toggleButton(button) {
  if ((document.querySelector('.js-gaming-button').classList.contains('is-toggled')
    || document.querySelector('.js-music-button').classList.contains('is-toggled')
    || document.querySelector('.js-tech-button').classList.contains('is-toggled')) === false) {
    document.querySelector(button).classList.add('is-toggled');
  } else {
    document.querySelector(button).classList.remove('is-toggled');
  }
  console.log(document.querySelector(button).classList.contains('is-toggled'));
}

console.log(document.querySelector('.js-button').classList.contains('js-button'));