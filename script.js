function openImage(img) {
  const lightbox = document.getElementById("lightbox");
  const expandedImg = document.getElementById("expandedImg");
  lightbox.style.display = "flex";
  expandedImg.src = img.src;
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}
