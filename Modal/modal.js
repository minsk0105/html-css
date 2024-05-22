const box = document.querySelector('.modal');
const open = document.getElementById('open-btn');
const close = document.getElementById('close-btn');

open.addEventListener('click', function(){
  box.style.display = 'block';
})

close.addEventListener('click', function(){
  box.style.display = 'none';
})