var w = 0;
$(function() {
    "use strict";

    /*----- Page Loader Start ----- */
    $(window).on("load", function() {
        $('#preloader').delay(2000).fadeOut(500);
    });
    /*----- Page Loader End ----- */

    /*----- Sticky Header Start ----- */
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });
    /*----- Sticky Header End ----- */

    $(document).ready(function() {
        /*----- Menu Toggle Start ----- */
        $(".menu-toggle").on("click", function() {
            $(this).toggleClass("active");
            $(".main-menu").slideToggle();
            $(".nav-menu > ul ul").slideUp(200);
            $("li.menu-dropdwon a").removeClass("active");
        });
        /*----- Menu Toggle End ----- */

        /*----- Submenu Drop Down Start ----- */
        $("li.menu-dropdwon a").on("click", function() {
            if ($(window).width() < 1025) {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                    $(this).siblings(".nav-menu > ul ul").slideUp(200);
                } else {
                    $("li.menu-dropdwon a").removeClass("active");
                    $(this).addClass("active");
                    $(".menu-in").slideUp(200);
                    $(this).siblings(".nav-menu > ul ul").slideDown(200);
                };
            };
        });
        /*----- Submenu Drop Down End ----- */

        /*----- Roadmap Slider Start ----- */
        if ($(".roadmap-slider").length > 0) {
            $('.roadmap-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 4,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    1025: {
                        items: 3,
                    },
                    1200: {
                        items: 4,
                    },
                }
            });
        }
        /*----- Roadmap Slider End ----- */

        /*----- Blog Slider Start ----- */
        if ($(".blog-slider").length > 0) {
            $('.blog-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    },
                }
            });
        }
        /*----- Blog Slider End ----- */

        /*----- FAQ According Start ----- */
        $(function() {
            $('.faq-title').on("click", function(j) {
                var dropDown = $(this).closest('.faq-box').find('.faq-panel');
                $(this).closest('.faq-content').find('.faq-panel').not(dropDown).slideUp();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.faq-content').find('.faq-title.active').removeClass('active');
                    $(this).addClass('active');
                }
                dropDown.stop(false, true).slideToggle();
                j.preventDefault();
            });
        });
        /*----- FAQ According End ----- */

        /* -------- Countdown Timer ------- */
        if ($(".coins-counter-loop").length > 0) {
            var your_date = '2022-09-28 00:00:00';
            var second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
            var countDown = new Date(your_date.replace(/-/g, "/")).getTime();
            setInterval(function() {
                var now = new Date().getTime(),
                    distance = countDown - now;
                document.getElementById('days').innerText = Math.floor(distance / (day));
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
            }, second);
        }
        /* -------- Countdown Timer End ------- */

        /* -------- Coins Progress Start --------*/
        if ($(".coins-progress").length > 0) {
            setTimeout(coins_progress, 3000);

            function coins_progress() {
                $(".coins-progress span").each(function() {
                    $(this).animate({
                        width: $(this).attr("data-progress") + "%",
                    }, 1000);
                    $(this).text($(this).attr("data-progress") + "%");
                });
            };
        }
        /* -------- Coins Progress End --------*/

        /* -------- Contact Form SMS Start --------*/
        $('.contactfrm').on('submit', function(e) {
            e.preventDefault();
            $('.contactfrmmsg').slideDown('slow');
            /* -------- Contact Form SMS Start --------*/
        });
    });
})