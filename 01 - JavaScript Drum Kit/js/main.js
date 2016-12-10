var playSound = function (event) {
  var audio = document.querySelector(".s"+event.keyCode);
  var key = document.querySelector(".k"+event.keyCode);
  if (!audio) return; // quicker way to end the program if the key clicked is not a part of the keyboard
  audio.currentTime = 0; // reset the WAV sound
  audio.play();
  key.classList.add('playing');
};

var removeTransition = function(event) {
  if (event.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
};

keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
