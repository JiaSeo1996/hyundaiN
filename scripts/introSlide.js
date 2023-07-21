$(document).ready(() => {
    $("#intro-slide > .slide-item:first-of-type").css("left", 0);

    var videoPlay = () => {
        $("#intro-slide > .slide-item:first-of-type video").get(0).currentTime =0;
        $("#intro-slide > .slide-item:first-of-type video").get(0).play();
    }
    videoPlay();

    for (let i = 0; i <= $("#intro-slide > .slide-item").length - 1; i++) {
        $("<span />", {class: "bullet"}).clone().appendTo("#intro > .slide-control > .pagination");
        if (i == 0) {
            $("#intro > .slide-control > .pagination > .bullet:first-of-type").addClass("active");
        }
    }

    var moveBulletNext = () => {
        if ($("#intro > .slide-control > .pagination > .bullet:last-of-type").hasClass("active") === true) {
            $("#intro > .slide-control > .pagination > .bullet.active").removeClass("active");
            $("#intro > .slide-control > .pagination > .bullet:first-of-type").addClass("active");
        } else {
            $("#intro > .slide-control > .pagination > .bullet.active").removeClass("active").next().addClass("active");
        }
    }

    var moveBulletPrev = () => {
        if ($("#intro > .slide-control > .pagination > .bullet:first-of-type").hasClass("active") === true) {
            $("#intro > .slide-control > .pagination > .bullet.active").removeClass("active");
            $("#intro > .slide-control > .pagination > .bullet:last-of-type").addClass("active");
        } else {
            $("#intro > .slide-control > .pagination > .bullet.active").removeClass("active").prev().addClass("active");
        }
    }

    var moveItemNext = () => {
        $("#intro-slide > .slide-item:first-of-type").stop().animate({left: "-100%"}, {
            duration: 500,
            start: () => {
                $("#intro-slide > .slide-item:nth-of-type(2)").stop().animate({left: 0}, 500);
            },
            complete: () => {
                $("#intro-slide > .slide-item:first-of-type").insertAfter("#intro-slide > .slide-item:last-of-type");
                $("#intro-slide > .slide-item:last-of-type").css("left", "100%");
                autoSlide();
                videoPlay();
                moveBulletNext();
            }
        })
    }

    var moveItemPrev = () => {
        $("#intro-slide > .slide-item:last-of-type").stop().animate({left: "-100%"}, {
            duration: 0,
            complete: () => {
                $("#intro-slide > .slide-item:last-of-type").stop().animate({left: 0}, {
                    duration: 500,
                    start: () => {
                        $("#intro-slide > .slide-item:first-of-type").stop().animate({left: "100%"}, 500);
                    },
                    complete: () => {
                        $("#intro-slide > .slide-item:last-of-type").insertBefore("#intro-slide > .slide-item:first-of-type");
                        videoPlay();
                        moveBulletPrev();
                    }
                })
            }
        });
    }

    var autoSlide = () => {
        $("#intro-slide > .slide-item video").on({
            ended: () => {
                moveItemNext();
            }
        })
    }
    autoSlide();

    $("#intro > .slide-control > .move > .next").click(() => {
        moveItemNext();
    })

    $("#intro > .slide-control > .move > .prev").click(() => {
        moveItemPrev();
    })
})

