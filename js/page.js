function navToggle() {
  let siteNav = document.getElementById ('site-nav');
  let trigram = document.getElementById ('trigram');
  console.log (trigram);
  if (siteNav.className === 'nav-wrap') {
    siteNav.classList.add ('mobile');
    trigram.classList.add ('tri-mobile');
  } else {
    siteNav.classList = 'nav-wrap';
    trigram.classList = 'nav-link';
  }

}
function navToggle() {
  let siteNav = document.getElementById('site-nav');
  let trigram = document.getElementById('trigram');
  if (siteNav.className === 'nav-wrap') {
    siteNav.classList.add('mobile');
    trigram.classList.add('tri-mobile');
  } else {
    siteNav.classList = 'nav-wrap';
    trigram.classList = 'nav-link';
  }
}

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//main slideshow function
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("thumb");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

function pop(x) {
  let modalContent = document.getElementById('modal-wrap');
  modalContent.classList.add('show');
  document.getElementById("picture").src = "https://picsum.photos/id/" + x + "/480/320";
  document.getElementById(x).style.display = "block";
}

function expand(x) {
  let photo = document.getElementById('photo');
  photo.src = "https://picsum.photos/id/" + x + "/480/320";
  let text = document.getElementById(x);
  text.style.display = "block";
  let modalContent = document.getElementById('modal-wrap');
  modalContent.classList.add('show');
  }

function x() {
  let modalContent = document.getElementById('modal-wrap');
  modalContent.classList.remove('show');  
  var text = document.getElementsByClassName("none");
  for (var i = 0; i < text.length; i++) {
    console.log(i);
    text[i].style.display = "none";
  }
}
function closes(){
  let modalContent = document.getElementById('modal-wrap');
  modalContent.classList.remove('show');
}