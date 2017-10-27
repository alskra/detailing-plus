var sectionStart = document.querySelector('.section-start'),
  sectionStartVideo = sectionStart.querySelector('.section-start__video');
sectionStartVideo.muted = true;
sectionStartVideo.src = Modernizr.mq('(max-width: 1279px)') ? sectionStartVideo.getAttribute('data-mobile-src') : sectionStartVideo.getAttribute('data-desktop-src');

$(window).on('resize.startVideo', function() {
  if ($(sectionStart).innerWidth() / $(sectionStart).innerHeight() >= 16 / 9) {
    $(sectionStartVideo).width('100%').height('auto');
  } else {
    $(sectionStartVideo).width('auto').height('100%');
  }
}).triggerHandler('resize.startVideo');
$(function() {
  $('.section-service__slider').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    fade: false,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: false,
    autoplaySpeed: 5000,
    zIndex: 1,
    lazyLoad: 'ondemand',
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false,
    responsive: [{
      breakpoint: 420,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 840,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    }]
  }).on('lazyLoaded', function(event, slick, image, imageSource) {
    $(image).closest('.slick-slide').removeClass('loading');
  });
});
$(function() {
  $('.form-price').each(function() {
    $(this).parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
    }).on('form:submit', function(el) {
      var $form = el.$element,
        responseMsg = 'Ваше сообщение успешно отправлено, мы&nbsp;с&nbsp;Вами свяжемся!',
        data = $form.serialize();
      //console.log('Serialize data: ' + data);
      $form.find('.form-price__btn').prop('disabled', true);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: data,
        success: function success(data, textStatus, jqXHR) {},
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error('Ошибка отправки: ' + jqXHR.status);
          responseMsg = 'Ошибка отправки: ' + jqXHR.statusText;
        },
        complete: function complete(jqXHR, textStatus) {
          $form.find('.form-price__btn').prop('disabled', false).end().find('.field').val('').end().find('.checkbox__input').prop('checked', false);
          $.fancybox.close();
          $.fancybox.open('<div class="modal">' + '<h4 class="modal__title mb-0">' + responseMsg + '</h4>' + '<button class="btn modal__btn-close d-none" data-fancybox-close>Закрыть</button>' + '</div>');
        }
      });
      return false;
    });
  });
});
$('.field').on('blur.hasValue', function() {
  $(this).toggleClass('field--has-value', $(this).val() !== '');
}).triggerHandler('blur.hasValue');
var inputs = document.querySelectorAll('.field-file__input');
Array.prototype.forEach.call(inputs, function(input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener('change', function(e) {
    var fileName = '';
    if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    else fileName = e.target.value.split('\\').pop();

    if (fileName) label.innerHTML = fileName;
    else label.innerHTML = labelVal;
  });
});
$(function() {
  $('.slider-img').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: false,
    autoplaySpeed: 5000,
    zIndex: 1,
    lazyLoad: 'ondemand',
    pauseOnFocus: false,
    pauseOnHover: false,
    adaptiveHeight: false,
    responsive: []
  }).on('lazyLoaded', function(event, slick, image, imageSource) {
    $(image).closest('.slick-slide').removeClass('loading');
  });
});
$(function() {
  $('.get-price').each(function() {
    $(this).parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
    }).on('form:submit', function(el) {
      var $form = el.$element,
        responseMsg = 'Ваше сообщение успешно отправлено, мы&nbsp;с&nbsp;Вами свяжемся!',
        data = $form.serialize();
      //console.log('Serialize data: ' + data);
      $form.find('.get-price__btn').prop('disabled', true);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: data,
        success: function success(data, textStatus, jqXHR) {},
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error('Ошибка отправки: ' + jqXHR.status);
          responseMsg = 'Ошибка отправки: ' + jqXHR.statusText;
        },
        complete: function complete(jqXHR, textStatus) {
          $form.find('.get-price__btn').prop('disabled', false).end().find('.field').val('').end().find('.checkbox__input').prop('checked', false);
          $.fancybox.close();
          $.fancybox.open('<div class="modal">' + '<h4 class="modal__title mb-0">' + responseMsg + '</h4>' + '<button class="btn modal__btn-close d-none" data-fancybox-close>Закрыть</button>' + '</div>');
        }
      });
      return false;
    });
  });
});
$.fancybox.defaults.hash = false;
//$.fancybox.defaults.smallBtn = false;
$(function() {
  $('.form-feedback').each(function() {
    $(this).parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
    }).on('form:submit', function(el) {
      var $form = el.$element,
        responseMsg = 'Ваше сообщение успешно отправлено, мы&nbsp;с&nbsp;Вами свяжемся!',
        data = $form.serialize();
      //console.log('Serialize data: ' + data);
      $form.find('.form-feedback__btn').prop('disabled', true);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: data,
        success: function success(data, textStatus, jqXHR) {},
        error: function error(jqXHR, textStatus, errorThrown) {
          console.error('Ошибка отправки: ' + jqXHR.status);
          responseMsg = 'Ошибка отправки: ' + jqXHR.statusText;
        },
        complete: function complete(jqXHR, textStatus) {
          $form.find('.form-feedback__btn').prop('disabled', false).end().find('.field').val('').end().find('.checkbox__input').prop('checked', false);
          $.fancybox.close();
          $.fancybox.open('<div class="modal">' + '<h4 class="modal__title mb-0">' + responseMsg + '</h4>' + '<button class="btn modal__btn-close d-none" data-fancybox-close>Закрыть</button>' + '</div>');
        }
      });
      return false;
    });
  });
});
//# sourceMappingURL=blocks.js.map
