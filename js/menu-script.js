var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-header").style.top = "4rem";
  } else {
    document.getElementById("main-header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

function showMenu() {
  let sub = document.getElementById("sub-menu");
  let hide = document.getElementById("hide-btn");
  let show = document.getElementById("show-btn");
  sub.style.display = "block";
  sub.style.opacity = 1;
  sub.style.visibility = "visible";
  show.style.display = "none";
  hide.style.display = "block";
}
function hideMenu() {
  let sub = document.getElementById("sub-menu");
  let hide = document.getElementById("hide-btn");
  let show = document.getElementById("show-btn");
  sub.style.display = "none";
  sub.style.opacity = 0;
  sub.style.visibility = "hidden";
  show.style.display = "block";
  hide.style.display = "none";
}

function showDropMenu() {
  let sub = document.getElementById("dropMenu");

  if (sub.classList.contains("drop-hide")) {
    sub.classList.remove("drop-hide");
    sub.classList.add("drop-show");
  } else {
    sub.classList.remove("drop-show");
    sub.classList.add("drop-hide");
  }
}
