function ok(){
    alert("clickou")
};

var btnMobile = document.getElementById('btn-mobile');
 
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
console.log("passou da function")
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function process(quant){
  var value = parseInt(document.getElementById("quant").value);
  value+=quant;
  if(value < 1){
    document.getElementById("quant").value = 1;
  }else{
  document.getElementById("quant").value = value;
  }
}