function adjustOnload() {
  if (window.innerWidth < 982) {
    $('.openSidenav').css('display', 'block');
    $('.navbar').css('display', 'none');
  } else {
    $('.navbar').css('display', 'inline-block');
    $('.openSidenav').css('display', 'none');
  }
}

function openNav() {
  document.getElementById("sidenavbar").style.width = "75%";
}

function openSidenavDrop(container, openBtn, closeBtn) {
  document.getElementById(container).style.display = "block";
  document.getElementById(openBtn).style.display = "none";
  document.getElementById(closeBtn).style.display = "inline-block";
}

function closeSidenavDrop(container, openBtn, closeBtn) {
  document.getElementById(container).style.display = "none";
  document.getElementById(openBtn).style.display = "inline-block";
  document.getElementById(closeBtn).style.display = "none";
}

function closeNav() {
  document.getElementById("sidenavbar").style.width = "0";
}

function resizeNavbar() {
  window.onresize = function() {
    if (window.innerWidth < 982) {
      $('.navbar').css('display', 'none');
      $('.openSidenav').css('display', 'block');

    } else {
      $('.navbar').css('display', 'inline-block');
      $('.openSidenav').css('display', 'none');

    }
  }
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("img");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace( "active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
