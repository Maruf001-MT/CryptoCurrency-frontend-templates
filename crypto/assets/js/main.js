/*******************************************************
    Template Name    : Crypto - ICO & Cryptocurrency Bitcoin Landing Page Template
    Author           : Cute Themes
    Version          : 1.0
    Created          : 2021
	File Description : Main Custom JS file of the template
*******************************************************/
(function($) {
    "use strict";
    var wind = $(window);
    var nav = $('nav');
    var navHeight = nav.outerHeight();
    $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    });
    // START PRELOADED
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    // Navbar Menu Reduce 
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-lg').addClass('navbar-reduce');
            $('.navbar-expand-lg').removeClass('navbar-trans');
        } else {
            $('.navbar-expand-lg').addClass('navbar-trans');
            $('.navbar-expand-lg').removeClass('navbar-reduce');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });
    // Back to top button 
    $(function() {
        // Scroll Event
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.back-to-top').addClass('active');
            if (scrolled < 300) $('.back-to-top').removeClass('active');
        });
        // Click Event
        $('.back-to-top').on('click', function() {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });
    //  Star Scrolling nav
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - navHeight + 30)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll').on("click", function() {
        $('.navbar-collapse').collapse('hide');
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });

    // Roadmap Slider
    if ($("#roadmap-slider").length > 0) {
        $("#roadmap-slider").owlCarousel({
            autoplay: false,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true,
                    nav: false
                },
                420: {
                    items: 2,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                767: {
                    items: 3,
                    loop: true,
                    nav: false,
                    margin: 0
                },
                1200: {
                    items: 4,
                    loop: true,
                    nav: false,
                    margin: 0
                },
            }
        });
    }

    // Testimonials owlCarousel
    $('.testimonial-slide .owl-carousel').owlCarousel({
        loop: true,
        margin: 16,
        mouseDrag: true,
        autoplay: true,
        dots: true,
        smartSpeed: 800,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //  Star Counter
    $('.counter-number').counterUp({
        delay: 15,
        time: 2000
    });
    // FAQ Accordion
    $(function() {
        $('.accordion').find('.accordion-title').on('click', function() {
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('slow');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('slow');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });
    //  POPUP VIDEO
    $('.popup-video').magnificPopup({
        type: 'iframe',
    });

    // WOW JS
    $(window).on('load', function() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow', // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset: 30, // Distance to the element when triggering the animation (default is 0)
                mobile: false, // Trigger animations on mobile devices (default is true)
                live: true, // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });
})(jQuery);