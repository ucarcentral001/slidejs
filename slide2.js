var index = 0;
var slides = document.querySelectorAll(".slides");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  index++;
  
  setTimeout(changeSlide, 4000);
}

changeSlide();
