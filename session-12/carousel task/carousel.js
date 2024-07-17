let cursor = 1;

showslides(cursor);
function next(n) {
  showslides((cursor += n));
}
function prev(n) {
  showslides((cursor -= n));
}
function current(n) {
  showslides((cursor = n));
}
function showslides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    cursor = 1;
  }
  if (n < 1) {
    cursor = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[cursor - 1].style.display = "block";
  dots[cursor - 1].className += " active";
}
