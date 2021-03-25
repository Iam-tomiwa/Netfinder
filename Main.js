//////////////////////////////////
//navigation toggle...
let menuBtn = document.getElementById("menu");
let navBar = document.getElementById("nav-menu");
let overlay = document.getElementById("overlay");
let darkmode = document.getElementById("sticky");

close = () => {
  menuBtn.classList.toggle("la-times");
  navBar.style.left = "-100vw";
  overlay.style.left = "-100vw";
};

toggleBtn = () => {
  if (menuBtn.classList.contains("la-bars")) {
    menuBtn.classList.toggle("la-times");
    navBar.style.left = "-100vw";
    overlay.style.left = "-100vw";
  }
  if (menuBtn.classList.contains("la-times")) {
    navBar.style.left = "0vw";
    overlay.style.left = "0vw";
  }
};

overlay.addEventListener("click", close);
menuBtn.addEventListener("click", toggleBtn);

///dark mode toggle button
darkmode.addEventListener("click", e => {
  document.body.classList.toggle("dark");
  document.body.style.transition = "all .5s linear";
  darkmode.classList.toggle("fa-moon");
  darkmode.classList.toggle("fa-sun");
  document.querySelector("nav img").classList.toggle("img-dark");
});

/////////////////////////////////
//search box functions

let phoneNumber = document.querySelector(".search-box");
let bg = document.querySelector(".overlay1");
let alertBox = document.querySelector(".alert-box");
let closeBox = document.querySelector(".close");
let searchBtn = document.querySelector(".form");
let network = document.getElementById("network");

//output alert
myAlert = (text, color) => {
  network.textContent = `Your Network is ${text}.`;
  bg.style.display = "block";
  alertBox.style.display = "flex";
  network.style.color = color;
};

//error message
error = () => {
  network.innerHTML =
    '<p class="error"><i class="las la-exclamation-triangle"></i> Error! Pls enter a complete and valid  number</p>';
  bg.style.display = "block";
  alertBox.style.display = "flex";
};

//main function
getNetwork = e => {
  e.preventDefault();
  let value = phoneNumber.value;
  val = value.slice(0, 5);

  if (value.length === 11 && !isNaN(value)) {
    let mtn = /0803|0703|0903|0806|0706|0813 |0810|0814|0816|0906|0704|07025|07026/;
    let glo = /0805|0705|0905|0807|0815|0811|0905/;

    let airtel = /0802|0902|0701|0808|0708 | 0812|0708|0808|0901|0904|0907/;

    let etisalat = /0809|0909|0817|0818|0908/;

    if (val.match(mtn)) {
      return myAlert("Mtn", "#f1d012");
    } else if (val.match(glo)) {
      return myAlert("Glo", "#0abf53");
    } else if (val.match(airtel)) {
      return myAlert("Airtel", "#ff0000");
    } else if (val.match(etisalat)) {
      return myAlert("9mobile", "#7fbb00");
    } else if (val.startsWith("0702")) {
      return myAlert("Smile", "#757575");
    } else if (val.startsWith("0804")) {
      return myAlert("Ntel", "red");
    } else if (val.startsWith("0707")) {
      return myAlert("Zoomobile", "red");
    } else {
      return myAlert("Unknown", "red");
    }
  } else {
    error();
  }
};

searchBtn.addEventListener("submit", getNetwork);

closeBox.addEventListener("click", e => {
  bg.style.display = "none";
  alertBox.style.display = "none";
});
