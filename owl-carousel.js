$(document).ready(function () {
    $(".owl-carousel").each(function () {

        var owl = $(this);
        owl.owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
        // Custom Navigation Events
        owl.parent().find(".owl-next").click(function () {
            owl.trigger('next.owl.carousel');
        });
        owl.parent().find(".owl-prev").click(function () {
            owl.trigger('prev.owl.carousel');
        });

        if (owl.find('.product').length < 3 && $(window).width() >= 768) {
            owl.find('.owl-controls').hide()
        }

    });
})