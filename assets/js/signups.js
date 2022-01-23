const seniorImg = document.getElementById('seniors');
const kidsImg = document.getElementById('kids');
const choicesMain = document.getElementById('sign-up-choices');
const elderlySection = document.getElementById("elderlySection");
const kidSection = document.getElementById("kidSection");

seniorImg.addEventListener('click', function(){
  choicesMain.className = 'hidden';
  elderlySection.classList.remove('hidden'); 
})

kidsImg.addEventListener('click', function(){
  choicesMain.className = 'hidden';
  kidSection.classList.remove('hidden'); 
})
