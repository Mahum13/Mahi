// $(document).ready(function(){
//     $(this).scrollTop(0);
// });

function adjustOnload() {
  if (window.innerWidth < 982) {
    $('.openSidenav').css('display', 'block');
    $('.navbar').css('display', 'none');
  } else {
    $('.navbar').css('display', 'inline-block');
    $('.openSidenav').css('display', 'none');
  }
}

function logoScroll() {
  // Get height of logo
  var imgHeight = document.getElementById('logoDiv').clientHeight;

  var offset = $('.logo').offset();

  // distance over which zoom effect takes place
  var maxScrollDistance = 300;
  // var maxScrollDistance = offset.top;

  // set window height if that is smaller
  var heightAtMax = 150;

  // calculate diff and how many pixels to zoom per pixel scrolled
  var heightDiff = imgHeight - heightAtMax;
  var pixelsPerScroll = (heightDiff / maxScrollDistance);

  $(window).scroll(function() {
    // the currently scrolled to position - maxout at maxScrollDistance
    var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);

    // how many pixels to adjust by
    var scrollChangePx = Math.floor(scrollTopPos * pixelsPerScroll);

    // calculate new height
    var zoomedHeight = imgHeight - scrollChangePx;

    // set the height
    $('.logo').css('height', zoomedHeight);
    $('.logo').css('background-size', zoomedHeight);
  });
}


function logoStick() {
  var img = document.getElementById('logoDiv');
  var sticky = img.offsetTop;
  $(window).scroll(function() {
    var maxScroll = 370;
    var top = $(document).scrollTop();
    if (top >= maxScroll) {
      $('.logo').css({position: 'fixed', top: '85px'});
    } else {
      $('.logo').css({position: 'relative', top: '50%'});
    }
  });
  // window.onscroll = function() {stickyFunc(img, sticky)};
}

// function stickyFunc(id, sticky) {
//   // Calculate distance from top of window
//   var scrollTop = $(window).scrollTop(),
//       elementOffset = $('.logo').offset().top,
//       distance = (elementOffset - scrollTop);
//   // if (distance <= 10) {
//   //   id.classList.add("sticky");
//   // } else {
//   //   id.classList.remove("sticky");
//   // }
//
//   if (window.pageYOffset + 900 > sticky) {
//     id.classList.add("sticky");
//   } else {
//     id.classList.remove("sticky");
//
//   }
//
// }

function navbarStick() {
  $(window).scroll(function() {
    var maxScroll = 20;
    var top = $(document).scrollTop();
    if (top >= maxScroll) {
      $('.navbar').css({position: 'fixed', top: '80px'});
      $('.openSidenav').css({position: 'fixed', top: '80px'});
    } else {
      $('.navbar').css({position: 'absolute', top: '95px'});
      $('.openSidenav').css({position: 'absolute', top: '95px'});
    }
  });
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




// Fix the video at a certain point
function fixedDiv() {
  $(window).scroll(function() {
    // get logo height
    var lg = document.querySelector('.logo');
    var st = window.getComputedStyle(lg, null);
    var height = parseInt(st.backgroundSize);

    // get video height and subtract logo height from video height to get maxScroll position
    var vid = document.getElementById('vid');

    var maxScroll = vid.clientHeight - height;
    var stop = -(maxScroll - 27);

    var scrollTopPos = Math.min(maxScroll, $(document).scrollTop());
    if (scrollTopPos + 58 >= maxScroll) {
      $('.introVid').css({position: 'fixed', top: stop});
    } else {
      $('.introVid').css({position: 'absolute', top: '0px'});
    }
  });
}

function partnersModal(n) {
  var modal = document.getElementById('myModal' + n);
  var span = document.getElementsByClassName('close')[n];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      moda.style.display = "none";
    }
  }
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
