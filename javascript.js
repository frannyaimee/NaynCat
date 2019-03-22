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
  showCats();
  moveCats();
  audio.play();
  setTimeout( function() { document.body.style.backgroundImage = "none", hideCats(), audio.pause(), audio.currentTime = 0
  },
   8000);
})

// Show Cats upon clicking on dog loaf
function showCats() {
  document.getElementById("cat").innerHTML = "<img src='Cat.png'>";
  document.getElementById("cat2").innerHTML = "<img src='Cat.png'>";
  document.getElementById("cat3").innerHTML = "<img src='Cat.png'>";
  document.getElementById("cat4").innerHTML = "<img src='Cat.png'>";
  document.getElementById("cat5").innerHTML = "<img src='Cat.png'>";
  document.getElementById("cat6").innerHTML = "<img src='Cat.png'>";
  document.getElementById("cat7").innerHTML = "<img src='Cat.png'>";
}

// Hide Cats after time has passed
function hideCats() {
  document.getElementById("cat").innerHTML = "";
  document.getElementById("cat2").innerHTML = "";
  document.getElementById("cat3").innerHTML = "";
  document.getElementById("cat4").innerHTML = "";
  document.getElementById("cat5").innerHTML = "";
  document.getElementById("cat6").innerHTML = "";
  document.getElementById("cat7").innerHTML = "";
}

// Moving of cats from top to bottom right
function moveCats() {
  var elem = document.getElementById("cat");
  var elem2 = document.getElementById("cat2");
  var elem3 = document.getElementById("cat3");
  var elem4 = document.getElementById("cat4");
  var elem5 = document.getElementById("cat5");
  var elem6 = document.getElementById("cat6");
  var elem7 = document.getElementById("cat7");
  var pos = 0;
  var id = setInterval(frame, 3);
  function frame() {
    if (pos === 800 && pos2 === 800 && pos3 === 800 && pos4 === 800 && pos5 === 800 && pos6 === 800 && pos7 === 800) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
      elem2.style.top = pos + "px"; 
      elem2.style.left = pos + "px";
      elem3.style.top = pos + "px"; 
      elem3.style.left = pos + "px";
      elem4.style.top = pos + "px"; 
      elem4.style.left = pos + "px";
      elem5.style.top = pos + "px"; 
      elem5.style.left = pos + "px";
      elem6.style.top = pos + "px"; 
      elem6.style.left = pos + "px";
      elem7.style.top = pos + "px"; 
      elem7.style.left = pos + "px";
    }
  }
}
