(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Back to top, WhatsApp, and Join Now buttons
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) { // Only control the back-to-top button
            $('.back-to-top').css({ 'opacity': '1', 'visibility': 'visible' });
        } else {
            $('.back-to-top').css({ 'opacity': '0', 'visibility': 'hidden' });
        }
    });
    
    // Add CSS for new buttons
    var style = document.createElement('style');
    style.innerHTML = `
        .whatsapp-btn {
            bottom: 85px;
        }
        .join-now-btn {
            bottom: 150px;
        }
        .whatsapp-btn,
        .join-now-btn {
            position: fixed;
            right: 15px;
            z-index: 99;
            opacity: 1 !important;
            visibility: visible !important;
        }
        .back-to-top {
            opacity: 0;
            visibility: hidden;
        }
    `;
    document.head.appendChild(style);
})(jQuery);