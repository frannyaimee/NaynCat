window.addEventListener("load", function(){ document.getElementById("doge").innerHTML = "Woof!"; });

document.getElementById("doge").onmouseenter = function() {showIcon()};
document.getElementById("doge").onmouseleave = function() {hideIcon()};

function showIcon() { doge.innerHTML = "&nbsp; &nbsp; <i class='fas fa-dog'></i> &nbsp; &nbsp;"; }
function hideIcon() { doge.innerHTML = "Woof!"; }

// Create Audio variable
const audio = new Audio("nyancat.mp3");

// Hide and Show Dog Loaf
function myFunction() {
  var x = document.getElementById("loaf");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Click Dog Loaf -> Change Background Image and Make Dog Disappear--> background back to normal after set time
// Create and Animate cats in litter
document.getElementById("loaf").addEventListener("click", function() {
  const litter = createLitter();
  document.body.style.backgroundImage = "url('bg.gif')"; 
  document.getElementById("loaf").style.display = "none";
  document.getElementById("dog").style.display = "none";
  audio.play();
  createLitter();
  animateCats(litter);
  setTimeout( function() { 
    document.body.style.backgroundImage = "none", 
    removeCats(litter),
    audio.pause(),
    audio.currentTime = 0
    document.getElementById("dog").style.display = "block";
  },
  10000);
})

const body = document.getElementsByTagName('body')[0];

function createCat() {
 let cat = document.createElement("img");
 cat.src = "Cat.png";
 cat.style.position = "absolute";
 cat.style.top = '-100px';
 let left = Math.floor(parseInt(body.clientWidth) * Math.random());
 left = left + 'px';
 cat.style.left = left;
 body.appendChild(cat);
 return cat;
}

function createLitter() {
  var litterCats = [];
  var numberCats = Math.floor((Math.random() * 80 ) + 10 );
  for (let i = 0; i < numberCats; i++) {
    litterCats[i] = createCat();
  }
  return litterCats;
}

function animateCats(allCats) {
  allCats.forEach(function (cat) {
    let randomTarget = Math.floor(parseInt(body.clientWidth) * Math.random()); //Random number spanning across the device width
    let rate = Math.floor(Math.random() * 10);  //Random number b/n 0-9 for rate
    let rotate = Math.floor(Math.random() * 361) //Random number between 0-360 for rotation
    cat.style.transition = 'all ' + rate + 's';
    cat.style.top = '100vh';
    cat.style.transform= 'rotate(' + rotate + 'deg)';
    let originalLeft = parseInt(cat.style.left);
    cat.style.left = originalLeft + randomTarget + 'px';
  });
}

function removeCats(allCats){
  allCats.forEach( function (cat) {
    cat.remove();
  });
}

