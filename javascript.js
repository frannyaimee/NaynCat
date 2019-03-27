window.addEventListener("load", function(){ document.getElementById("doge").innerHTML = "Woof!"; });

document.getElementById("doge").onmouseenter = function() {showIcon()};
document.getElementById("doge").onmouseleave = function() {hideIcon()};

function showIcon() { doge.innerHTML = "&nbsp; &nbsp; <i class='fas fa-dog'></i> &nbsp; &nbsp;"; }
function hideIcon() { doge.innerHTML = "Woof!"; }

const audio = new Audio("nyancat.mp3");

// Hide and Show Loaf

function myFunction() {
  var x = document.getElementById("loaf");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Click Button -> Dog Loaf Appears and Disappears

document.getElementById("doge").addEventListener("click", function() {
  document.getElementById("loaf").innerHTML = "<img src='dog.png'>";
})

// Click Dog Loaf -> Change Background Image and Make Dog Disappear--> background back to normal after set time

document.getElementById("loaf").addEventListener("click", function() {
  document.body.style.backgroundImage = "url('bg.png')"; 
  document.getElementById("loaf").style.display = "none";
  document.getElementById("dog").style.display= "none";
  audio.play();
  const litter = createLitter();
  animateCats(litter);
  setTimeout( function() { 
    document.body.style.backgroundImage = "none", 
    removeCats(litter),
    audio.pause(),
    audio.currentTime = 0
    document.getElementById("dog").style.display= "block";
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
  var numberCats = Math.floor(Math.random() * 80);
  for (let i = 0; i < numberCats; i++) {
    litterCats[i] = createCat();
  }
  return litterCats;
}

function animateCats(allCats) {

  allCats.forEach(function (cat) {
    let randomTarget = Math.floor(Math.random() * 100); //Random number between 0 and 99
    let randomTop = Math.floor(Math.random() * 100);
    console.log(randomTarget);
    let rate = Math.floor(Math.random() * 1000 + 3000)
    cat.animate([
    { transform: 'translateY(0px) translateX('+ randomTop + 'px)'}, 
    {transform: 'translateY(100vh) translateX('+ randomTarget + 'px)' }
    ], 
    { duration: rate,
      iterations: 9,
      delay: Math.random() * 5000
    });
  });
}

function removeCats(allCats){
  allCats.forEach( function (cat) {
    cat.remove();
  });
}
