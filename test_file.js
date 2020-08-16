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

function myAlert(networkName, color){
  network.textContent = `Your Network is ${networkName}.`
  network.style.color = color
  bg.style.display = 'block'
  alertBox.style.display = 'flex'
}

function isValidNumber(phoneNumber){
    if (phoneNumber.length == 11 && !isNaN(phoneNumber)){
        return true;
    }
    else{
        return false;
    }
}

function getNetwork(phoneNumber) {
  console.log(phoneNumber);
    switch(phoneNumber.slice(0, 5)){

        case '07025' || '08030' || '0903' || '0806'|| '0706' || '0906' || '0813' || '0810' || '0814' || '0816' :
            return myAlert(networkName = 'MTN', color = '#f1d012');//MTN Numbers
            break;
        case '0701' || '0708' || '0802' || '0808'|| '0812' || '0902' || '0907' || '0901' :
            return myAlert(networkName = "Airtel", color = '#ff0000');//Airtel Numbers
            break;
        case '0805' || '0705' || '0905' || '0811'|| '0807' || '0815' :
            return myAlert(networkName = 'Glo', color = '#0abf53');//Glo Numbers
            break;
        case '0809' || '0817' || '0818' || '0908'|| '0909':
            return myAlert(networkName = '9mobile', color = '#7fbb00');//9Mobile Numbers
            break;
        default:
            return(myAlert(networkName = "Unknown Network", color = '#000'));//Get creative
    }
}

function netFind(){
    let phoneNumber = input.value;
    if (isValidNumber(phoneNumber)){
        return getNetwork(phoneNumber)
    }
    else{
        return //Insert error for invalid number
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
     