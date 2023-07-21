$(document).ready(() => {
    let mHtml = $("html"),
        page = 1;

    mHtml.animate({scrollTop: 0}, 10);

    let flag = true;

    $(window).on({wheel: function (e) {

        if(mHtml.is(':animated')) return;

        if (window.scrollY >= 0 && window.scrollY < $("#intro").height()) {
            if (e.originalEvent.deltaY > 0) {
                mHtml.animate({scrollTop: $("#intro").height()});
            } else {
                mHtml.animate({scrollTop: 0});
            }
        } else if (window.scrollY <= $("#intro").height() + 120 && e.originalEvent.deltaY < 0) {
            mHtml.animate({scroll: 0})
        }
        }})
})
