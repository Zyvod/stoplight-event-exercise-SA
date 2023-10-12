(function() {
  'use strict';

var stopBtn = document.getElementById('stopButton')

var goBtn = document.getElementById('goButton')

var slowBtn = document.getElementById('slowButton')


goBtn.addEventListener('click',function() {
  let goLight = document.getElementById('goLight')
  goLight.classList.toggle('go')
})

slowBtn.addEventListener('click',function() {
  let slowLight = document.getElementById('slowLight')
  slowLight.classList.toggle('slow')
})

stopBtn.addEventListener('click',function() {
  let stopLight = document.getElementById('stopLight')
  stopLight.classList.toggle('stop')
})


})();
