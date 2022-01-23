const seniorImg = document.getElementById('seniors');
const kidsImg = document.getElementById('kids');
const choicesMain = document.getElementById('sign-up-choices');
const elderlySection = document.getElementById('elderlySection');
const kidSection = document.getElementById('kidSection');
const elderlyFormSubmit = document.getElementById('elderly-signup');
const kidsFormSubmit = document.getElementById('kids-signup');
const confirmationPage = document.getElementById('confirmationPage');
const header = document.getElementById('hideHeader');

seniorImg.addEventListener('click', function(){
  choicesMain.className = 'hidden';
  elderlySection.classList.remove('hidden'); 
})

kidsImg.addEventListener('click', function(){
  choicesMain.className = 'hidden';
  kidSection.classList.remove('hidden'); 
})

elderlyFormSubmit.addEventListener('submit', function(event){
  event.preventDefault();
  elderlySection.className = 'hidden';
  header.className = 'hidden';
  confirmationPage.classList.remove('hidden'); 
})

kidsFormSubmit.addEventListener('submit', function(event){
  event.preventDefault();
  kidSection.className = 'hidden';
  header.className = 'hidden';
  confirmationPage.classList.remove('hidden'); 
})