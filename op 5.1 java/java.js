var h1 = document.getElementById('h1');

h1.addEventListener('click', function onClick(event) {

   event.target.style.color = 'salmon';
   h1.textContent += " This just got added ";
});