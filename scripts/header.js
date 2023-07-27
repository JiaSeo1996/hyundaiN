$(document).ready(() => {
    const headerToggle = $("#header-toggle"),
        headerDropdown = $("#header-dropdown");

    if (headerToggle.hasClass("on") == false) {
        headerDropdown.slideUp(0);
    }

    headerToggle.click((e) => {
        if ($(e.currentTarget).hasClass("on") == false) {
            $(e.currentTarget).addClass("on");
            headerDropdown.slideDown(200);
        } else {
            $(e.currentTarget).removeClass("on");
            headerDropdown.slideUp(200);
        }
    })

    $("nav .category-name").click((e) => {
        if ($(window).width() >= 1024) {
            return;
        } else {
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
