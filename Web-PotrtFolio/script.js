const humburger = document.getElementById('humburger');
const list = document.getElementById('list'); 
const verlay = document.getElementById('overlay'); 
const icon = document.getElementById('icon');

humburger.addEventListener('click', ()=>{
  list.classList.toggle('navbar-list-active' );
  overlay.classList.toggle('overlay-active' )
  icon.classList.toggle('fa-xmark' )
})