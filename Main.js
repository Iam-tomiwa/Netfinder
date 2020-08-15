//////////////////////////////////
//navigation toggle...
let menuBtn = document.querySelector('.menu');
let navBar = document.querySelector('.nav-menu');
let overlay = document.querySelector('.overlay');
let topButton = document.getElementById('sticky');

function toggleBtn(e){
  if (menuBtn.classList.contains('fa-bars')) {
    menuBtn.classList.toggle('fa-times');
    navBar.style.left = '-100vw';
    overlay.style.left = '-100vw';
  }
   if(menuBtn.classList.contains('fa-times')){
    navBar.style.left = '0vw';
    overlay.style.left = '0vw';
  }
}

function close(e){
    menuBtn.classList.toggle('fa-times');
    navBar.style.left = '-100vw';
    overlay.style.left = '-100vw';
}

menuBtn.addEventListener('click', toggleBtn);
overlay.addEventListener('click', close);


window.addEventListener('scroll', function(){
  if(window.pageYOffset >= 100 ) {
    topButton.style.display = 'block';
  }else {
    topButton.style.display = 'none';
  }
});

/////////////////////////////////
//search box functions

let input = document.querySelector('.search-box');
let search = document.querySelector('.search-icon');
let alertBox = document.querySelector('.alert-box');
let bg = document.querySelector('.overlay1');
let closeBox = document.querySelector('.close');
let searchIcon = document.querySelector('.search-icon')
let network = document.getElementById('network')

function myAlert(text){
  network.textContent = `Your Network is ${text}.`
  bg.style.display = 'block'
  alertBox.style.display = 'flex'
}

function netFind(){
  let val = input.value
  if( val.startsWith('0803') || val.startsWith('0703') || 
      val.startsWith('0903') || val.startsWith('0806') ||
      val.startsWith('0706') || val.startsWith('0813') ||
      val.startsWith('0810') || val.startsWith('0814') ||
      val.startsWith('0816')) {

    myAlert('Mtn');
    network.style.color = '#f1d012'
    
  } else if( val.startsWith('0805') || val.startsWith('0705') || 
  val.startsWith('0905') || val.startsWith('0807') ||
  val.startsWith('0815') || val.startsWith('0811') ||
  val.startsWith('0905')){

    myAlert('Glo');
    network.style.color = '#0abf53'


  } else if( val.startsWith('0803') || val.startsWith('0703') || 
  val.startsWith('0809') || val.startsWith('0909') ||
  val.startsWith('0817') || val.startsWith('0818')){

      myAlert('9mobile');
      network.style.color = '#7fbb00'

  } else if( val.startsWith('0802') || val.startsWith('0902') || val.startsWith('0701') || val.startsWith('0812')){
    
      myAlert('Airtel');
      network.style.color = '#ff0000'

  }
  else{

    myAlert('not valid');
    network.style.color = '#000'

  }
}


input.addEventListener('keyup', function() {
  if(event.keyCode === 13){
    event.preventDefault();
    netFind()
  }
});

searchIcon.addEventListener('click', netFind);

closeBox.addEventListener('click', function(){

  bg.style.display = 'none'
  alertBox.style.display = 'none'

});
// navBar.classList.toggle('active')
  // overlay.classList.toggle('active')
   // navBar.style.display = 'none';
    // overlay.style.display = 'none';
        // navBar.style.display = 'block';
    // overlay.style.display = 'block';
     