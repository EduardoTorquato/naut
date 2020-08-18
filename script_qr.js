var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("qr").style.top = "-20vh";
  } else {
    document.getElementById("qr").style.top = "85vh";
  }
  prevScrollpos = currentScrollPos;
}