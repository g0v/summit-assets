if (jQuery.fn.lazyload) {
  document.documentElement.className = '';
}

jQuery(function ($) {
  var $lazyImgs = $('img.lazy');
  var asideController = document.getElementById('aside-controller');

  var isValidHash = function () {
    return !!$('#page-' + document.location.hash.replace('#', '')).length;
  };

  if (!isValidHash()) {
    document.location.hash = '#' + $('.page')[0].id.split('page-')[1];
  }

  $(window).on('hashchange', function (e) {
    asideController.checked = false;
    $lazyImgs.lazyload({
      'effect': 'fadeIn'
    });
  });

  setTimeout(function () {
    $(window).trigger('hashchange');
  }, 0);
});
