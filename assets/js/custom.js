function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    // $(window).on('load', function() {
        $('#preloader-active').delay(550).fadeOut('slow');
        $('body').delay(550).css({
            'overflow': 'visible'
        });
    // });

    $(function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('#brand-logo').css('height', '35');
                $('#brand-logo').css('width', 'auto');
            } else {
                $('#brand-logo').css('height', '50');
                $('#brand-logo').css('width', 'auto');
            }
            if ($(window).scrollTop() > 10) {
                $('.navbar').addClass('active').removeClass('shadow-sm');
                $('#toTopButton').removeClass('d-none').addClass('d-block');
            } else {
                $('.navbar').removeClass('active');
                $('#toTopButton').removeClass('d-block').addClass('d-none');
            }
        });
    });

    AOS.init({
      offset: 20,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 50,
    });

    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 9000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });