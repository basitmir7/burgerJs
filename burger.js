function flipFun() {
  var flipburger = document.getElementById("Burger");
  flipburger.style.transform = "rotate(360deg)";
  flipburger.style.transition = "ease-in-out 360ms";
}

function takeMeat() {
  var meat = document.getElementById("steak");
  var Dialog = document.getElementById("dialogBox");

  if (meat.classList.contains("section-3")) {
    meat.classList.remove("section-3");
  } else {
    Dialog.show();
    backgroundEffect();
  }
}

function addMeat() {
  var meat = document.getElementById("steak");
  var Dialog = document.getElementById("dialogBox");
  if (meat.classList.contains("section-3")) {
    // window.alert("there is already meat");
    Dialog.show();
    backgroundEffect();
  } else {
    meat.classList.add("section-3");
  }
}

function makeSmall() {
  document.getElementById("Burger").style.transform = "scale(0.55)";
  document.getElementById("Burger").style.transition = "ease-in-out 260ms";
}

function destroy() {
  var burger = document.getElementById("Burger");
  burger.classList.remove("burger-flex");
}

function addCheeze() {
  var cheze = document.getElementById("cheez");
  var Dialog = document.getElementById("dialogBox");

  if (cheze.classList.contains("cheeze")) {
    Dialog.show();
    backgroundEffect();
  } else {
    cheze.classList.add("cheeze");
  }
}

function removeCheeze() {
  var cheze = document.getElementById("cheez");
  var Dialog = document.getElementById("dialogBox");

  if (cheze.classList.contains("cheeze")) {
    cheze.classList.remove("cheeze");
  } else {
    Dialog.show();
    backgroundEffect();
  }
}

function addSpinach() {
  var spinach = document.getElementById("spinach");
  var Dialog = document.getElementById("dialogBox");

  if (spinach.classList.contains("section-2")) {
    Dialog.show();
    backgroundEffect();
  } else {
    spinach.classList.add("section-2");
  }
}

function removeSpinach() {
  var spinach = document.getElementById("spinach");
  var Dialog = document.getElementById("dialogBox");

  if (spinach.classList.contains("section-2")) {
    spinach.classList.remove("section-2");
  } else {
    Dialog.show();
    backgroundEffect();
  }
}

function nightMode() {
  var controlBtn = document.getElementById("nightmode");
  var outerCon = document.getElementById("main");
  var innerCon = document.getElementById("Burger");

  if (controlBtn.checked == true) {
    outerCon.style.background = "rgb(30,30,30)";
    outerCon.style.transition = "ease-in-out 300ms";

    innerCon.style.background = "rgb(30,30,30)";
    innerCon.style.transition = "ease-in-out 300ms";
  } else if (controlBtn != true) {
    outerCon.style.background = "rgb(255, 255, 255)";
    innerCon.style.background = "rgb(255, 255, 255)";
  }
}

closeDialog = () => {
  var Dialogclose = document.getElementById("dialogBox");
  Dialogclose.close();
};

backgroundEffect = () => {
  var Main = document.getElementById("main");

  Main.style.opacity = "0.7";
  Main.style.transition = "ease-in-out 100ms";
};

closeEffect = () => {
  var Main = document.getElementById("main");
  Main.style.opacity = "1";
};
