
// KOMENT: Vendosja e filepaths për skedarin index.js

let slideIndex = 1;
// KOMENT: Deklarimi i variablës slideIndex dhe inicializimi me vlerën 1

showSlides(slideIndex);
// KOMENT: Thirrja e funksionit showSlides me argumentin slideIndex

function plusSlides(n) {
  showSlides(slideIndex += n);
}
// KOMENT: Deklarimi i funksionit plusSlides me parametrin n dhe thirrja e funksionit showSlides me argumentin slideIndex shtuar me n

function currentSlide(n) {
  showSlides(slideIndex = n);
}
// KOMENT: Deklarimi i funksionit currentSlide me parametrin n dhe thirrja e funksionit showSlides me argumentin n

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  // KOMENT: Deklarimi i variablave i, slides dhe dots

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  // KOMENT: Kontrolli i vlerës së n dhe vendosja e vlerës së slideIndex bazuar në gjatësinë e slides

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // KOMENT: Vendosja e stilizimit të slides në "none" për të fshehur fotot

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // KOMENT: Heqja e klasës "active" nga të gjitha dots

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // KOMENT: Vendosja e stilizimit të slides dhe dots për të shfaqur slajdet dhe dotin aktual
}
