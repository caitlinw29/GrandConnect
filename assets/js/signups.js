const seniorImg = document.getElementById('seniors');
const kidsImg = document.getElementById('kids');
const choicesMain = document.getElementById('sign-up-choices');


seniorImg.addEventListener('click', function(){
  choicesMain.className = 'hidden';
})

kidsImg.addEventListener('click', function(){
  choicesMain.className = 'hidden';
})
