$(document).ready(() => {
    $("nav > .toggle").click(() => {
        $("nav > .toggle").toggleClass("on");
    })

    $("nav > .dropdown > .list > .category > .name").click((e) => {
        if ($(window).width() < 1280) {
            $(e.currentTarget).toggleClass("on");
        }
    })

    $(window).scroll(() => {
        if($(window).scrollTop() >= $("#intro").outerHeight() / 3) {
            $("header").addClass("afterScroll");
        } else {
            $("header").removeClass("afterScroll");
        }
    })
})
