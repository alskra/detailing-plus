let sectionStart = document.querySelector('.section-start'),
  sectionStartVideo = sectionStart.querySelector('.section-start__video');
sectionStartVideo.muted = true;
sectionStartVideo.src = Modernizr.mq('(max-width: 1279px)') ? sectionStartVideo.getAttribute('data-mobile-src') : sectionStartVideo.getAttribute('data-desktop-src');

$(window).on('resize.startVideo', function () {
  if ($(sectionStart).innerWidth()/$(sectionStart).innerHeight() >= 16/9) {
    $(sectionStartVideo).width('100%').height('auto');
  } else {
    $(sectionStartVideo).width('auto').height('100%');
  }
}).triggerHandler('resize.startVideo');