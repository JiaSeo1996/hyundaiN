$(document).ready(() => {
    const header = $("header"),
        toggle = $("header .toggleBtn"),
        nav = $("nav"),
        categoryName = $("nav .categoryName"),
        categoryDepth = $("nav .categoryDepth");

    var vpWidth = $(window).width();

    toggle.click((e) => {
        $(e.currentTarget).toggleClass("on");
        nav.toggleClass("on");
    })

    categoryName.click((e) => {
        if (vpWidth < 1280) {
            $(e.currentTarget).toggleClass("on");
        }
    })

    $(window).scroll(() => {

        if ($(window).scrollTop() >= $("#banner").outerHeight()) {
            header.addClass("afterScroll");
        } else if ($(window).scrollTop() < $("#banner").outerHeight()) {
            header.removeClass("afterScroll");
        }
    })
})
