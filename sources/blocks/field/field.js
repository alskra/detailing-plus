$('.field').on('blur.hasValue', function () {
  $(this).toggleClass('field--has-value', $(this).val() !== '');
}).triggerHandler('blur.hasValue');