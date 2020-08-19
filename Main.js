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

let phoneNumber = document.querySelector('.search-box');
let search = document.querySelector('.search-icon');
let alertBox = document.querySelector('.alert-box');
let bg = document.querySelector('.overlay1');
let closeBox = document.querySelector('.close');
let searchBtn = document.querySelector('.search-icon')
let network = document.getElementById('network')

function myAlert(text, color){
  network.textContent = `Your Network is ${text}.`
  bg.style.display = 'block';
  alertBox.style.display = 'flex';
  network.style.color = color;
}

function error(){
  network.innerHTML = '<p class="error"><i class="fas fa-exclamation-triangle"></i> Error! Pls enter a complete and valid  number</p>';
  bg.style.display = 'block';
  alertBox.style.display = 'flex';
}

function getNetwork(){
  let val = phoneNumber.value;

  if (val.length === 11) {
    let mtn = /0803|0703|0903|0806|0706|0813 |0810|0814|0816|0906|0704|07025|07026/;
    
    let glo = /0805|0705|0905|0807|0815|0811|0905/;
    
    let airtel = /0802|0902|0701|0808|0708 | 0812|0708|0808|0901|0904|0907/;
    
    let etisalat = /0809|0909|0817|0818|0908/;
    
    if (val.match(mtn)) {
      return myAlert('Mtn', '#f1d012');
      
    } else if (val.match(glo)) {
      return myAlert('Glo', '#0abf53');
      
    } else if (val.match(airtel)) {
      return myAlert('Airtel', '#ff0000');
      
    } else if (val.match(etisalat)) {
      return myAlert('9mobile', '#7fbb00');
      
    } else if(val.startsWith('0702')){
      return myAlert('Smile', '#757575');
      
    } else if(val.startsWith('0804')){
      return myAlert('Ntel', '#000');
      
    } else if(val.startsWith('0707')){
      return myAlert('Zoomobile', '#000');
      
    } else {
      return myAlert('Unknown', '#000');
      
    }
  } else {
      return error();
  }
  
}

phoneNumber.addEventListener('keyup', function() {
  if(event.keyCode === 13){
    event.preventDefault();
    return getNetwork();
  }
});

searchBtn.addEventListener('click', getNetwork);

closeBox.addEventListener('click', function(){
  bg.style.display = 'none'
  alertBox.style.display = 'none'
});
