$(document).ready(() => {
    let item = $("#index-intro-slide > .slide-item");
    const slide = $("#index-intro-slide"),
        pagination = $("#intro .slide-control-pagination");

    slide.find(".slide-item:first-of-type").css("left", 0);

    var videoPlay = () => {
        slide.find(".slide-item:first-of-type video").get(0).currentTime = 0;
        slide.find(".slide-item:first-of-type video").get(0).play();
    }
    videoPlay();

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
                autoSlide();
                videoPlay();
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
                        videoPlay();
                        bulletPrev();
                    }
                })
            }
        })
    }

    var autoSlide = () => {
        item.find("video").on({
            ended: () => {
                itemNext();
            }
        })
    }
    autoSlide();

    $("#intro .slide-control-move > .prev").click(() => {
        itemPrev();
    })

    $("#intro .slide-control-move > .next").click(() => {
        itemNext();
    })
})
