var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");

var images = document.querySelectorAll(".gallery-grid img");

for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    lightbox.style.display = "flex";
    lightboxImg.src = this.src;
  }
}

lightbox.onclick = function () {
  lightbox.style.display = "none";
}