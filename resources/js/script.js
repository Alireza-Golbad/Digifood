$(document).ready(function () {
    /* For the sticky navigation ****************/
    $(".js--section-features").waypoint(
        function (direction) {
            if (direction == "down") {
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
        },
        {
            offset: "56px",
        }
    );

    /* Scroll on buttons ***********/
    $(".js--scroll-to-plans").click(function () {
        $("body").animate({ScrollTop: $(".js--section-plans").offset().top}, 1000);
    });
});
