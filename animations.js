
$(document).ready(function () {
    $("body").css(
        "font-size",
        Math.sqrt($("section").width() * $("section").height()) / 25
    );

    $(window).resize(function () {
        $("body").css(
            "font-size",
            Math.sqrt($("section").width() * $("section").height()) / 25
        );
    });
    $(window).scroll(function () {
        $(".fades").each(function (i) {
            let bottom_of_object = $(this).offset().top + $(this).outerHeight();
            let top_of_window = $(window).scrollTop();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            let top_of_object = $(this).offset().top;

            if (
                (top_of_window > bottom_of_object ||
                    top_of_object > bottom_of_window) &&
                $(this).hasClass("fadein")
            ) {
                $(this).removeClass("fadein");
                $(this).addClass("fadeout");
            } else if (
                top_of_window < bottom_of_object &&
                top_of_object < bottom_of_window &&
                $(this).hasClass("fadeout")
            ) {
                $(this).removeClass("fadeout");
                $(this).addClass("fadein");
            }
        });

        if ($(window).scrollTop() > $("#nav").offset().top) {
            $("#nav").removeClass("fadein");
            $("#nav").addClass("fadeout");
            $("#navside").removeClass("fadeout");
            $("#navside").addClass("fadein");
        } else {
            $("#navside").removeClass("fadein");
            $("#navside").addClass("fadeout");
            $("#nav").removeClass("fadeout");
            $("#nav").addClass("fadein");
        }

        var scrollPos = $(document).scrollTop();
        $("#navside a").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (
                refElement.position().top <= scrollPos + 200 &&
                refElement.position().top + refElement.height() >
                    scrollPos + 200
            ) {
                $("a").removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });
});
