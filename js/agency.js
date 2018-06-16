(function($) {
  "use strict"; // Start of use strict

  $(function() {
    if (window.location.hash) {
      var hash = window.location.hash;
      $(hash).modal('show');
    }
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
    var modal = this;
    var hash = modal.id;
    history.pushState('', document.title, window.location.pathname);
    window.location.hash = hash;
    //Prevent browser to go Back when a modal is showing.. just close modal
    window.onhashchange = function() {
      if (!location.hash) {
        $(modal).modal('hide');
      }
    };
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
    var hash = this.id;
    window.location.hash = hash;
    history.pushState('', document.title, window.location.pathname);
    stopVideos(e)
  })

  function stopVideos(t) {
    var o = $(t.target).find("iframe");
    o.each(function(t, o) {
      $(o).attr("src", $(o).attr("src"))
    });
  }
})(jQuery); // End of use strict

