$(window).ready(() => {
    var last_scrollTop = 0;
    $(window).scroll(() => {
        var tmp = $(window).scrollTop();

        if (tmp > last_scrollTop) {
            console.log("scroll down");

            if ($(window).scrollTop() >= $("#y2012").offset().top) {
                $("y2012").addClass("on");
            }


        } else {
            console.log("scroll up");
        }
        last_scrollTop = tmp;
    })
})
