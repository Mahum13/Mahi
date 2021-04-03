$(document).ready(function(){
    $(this).scrollTop(0);
});

function logoScroll() {
  // Get width of logo
  var imgWidth = document.getElementById('logoDiv').clientWidth;

  // distance over which zoom effect takes place
  var maxScrollDistance = 150;

  // set window height if that is smaller
  var widthAtMax = 150;

  // calculate diff and how many pixels to zoom per pixel scrolled
  var widthDiff = imgWidth - widthAtMax;
  var pixelsPerScroll = (widthDiff / maxScrollDistance);

  $(window).scroll(function() {
    // the currently scrolled to position - maxout at maxScrollDistance
    var scrollTopPos = Math.min($(document).scrollTop(), maxScrollDistance);

    // how many pixels to adjust by
    var scrollChangePx = Math.floor(scrollTopPos * pixelsPerScroll);

    // calculate new width
    var zoomedWidth = imgWidth - scrollChangePx;

    // set the width
    $('.logo').css('background-size', zoomedWidth);
  });
}

function logoStick() {
  var img = document.getElementById('logoDiv');
  var sticky = img.offsetTop;
  window.onscroll = function() {stickyFunc(img, sticky)};
}

function navbarSticky() {
  // var bar = document.getElementById('navigationBar');
  // var sticky = bar.offsetTop;
  // window.onscroll = function() {stickyFunc(bar, sticky)};
}

function stickyFunc(id, sticky) {
  if (window.pageYOffset > sticky) {
    id.classList.add("sticky");
  } else {
    id.classList.remove("sticky");
  }
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
    var test = vid.pageYOffset;

    var maxScroll = vid.clientHeight - height;
    var stop = -maxScroll;

    var scrollTopPos = Math.min(maxScroll, $(document).scrollTop());
    if (scrollTopPos >= maxScroll) {
      $('.introVid').css({position: 'fixed', top: stop});

    } else {
      $('.introVid').css({position: 'absolute', top: '0px'});


    }
  });
}
