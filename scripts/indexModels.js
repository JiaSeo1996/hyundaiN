$(document).ready(() => {
    let item = $("#index-models-slide > .slide-item");
    const slide = $("#index-models-slide"),
        pagination = $("#models .slide-control-pagination");

    slide.find(".slide-item:first-of-type").css("left", 0);

    var slideHeight = () => {
        slide.css("height", item.height());
    }
    slideHeight();

    $(window).resize(() => {
        slideHeight();
    })

    for (let i = 0; i <= item.length - 1; i++) {
        pagination.append($("<span />", {class: "bullet"}).clone());
        if (i == 0) {
            pagination.find(".bullet:first-of-type").addClass("active");
        }
    }

    var bulletNext = () => {
        if (pagination.find(".bullet:last-of-type").hasClass("active") === true) {
            pagination.find(".bullet.active").removeClass("active");
            pagination.find(".bullet:first-of-type").addClass("active");
        } else {
            pagination.find(".bullet.active").removeClass("active").next().addClass("active");
        }
    }

    var bulletPrev = () => {
        if (pagination.find(".bullet:first-of-type").hasClass("active") === true) {
            pagination.find(".bullet.active").removeClass("active");
            pagination.find(".bullet:last-of-type").addClass("active");
        } else {
            pagination.find(".bullet.active").removeClass("active").prev().addClass("active");
        }
    }

    var itemNext = () => {
        slide.find(".slide-item:first-of-type").stop().animate({left: "-100%"}, {
            duration: 500,
            start: () => {
                slide.find(".slide-item:nth-of-type(2)").stop().animate({left: 0}, 500);
            },
            complete: () => {
                slide.find(".slide-item:first-of-type").insertAfter(slide.find(".slide-item:last-of-type"));
                slide.find(".slide-item:last-of-type").css("left", "100%");
                bulletNext();
            }
        })
    }

    var itemPrev = () => {
        slide.find(".slide-item:last-of-type").stop().animate({left: "-100%"}, {
            duration: 0,
            complete: () => {
                slide.find(".slide-item:last-of-type").stop().animate({left: 0}, {
                    duration: 500,
                    start: () => {
                        slide.find(".slide-item:first-of-type").stop().animate({left: "100%"}, 500);
                    },
                    complete: () => {
                        slide.find(".slide-item:last-of-type").insertBefore(slide.find(".slide-item:first-of-type"));
                        bulletPrev();
                    }
                })
            }
        })
    }

    setInterval(itemNext, 3000);

    $("#models .slide-control-move > .prev").click(() => {
        itemPrev();
    })

    $("#models .slide-control-move > .next").click(() => {
        itemNext();
    })
})
