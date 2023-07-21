$(document).ready(() => {
    $("#models-slide > .slide-item:first-of-type").css("left", 0);

    $("#models-slide").css("height", $("#models-slide > .slide-item").outerHeight());

    $(window).resize(() => {
        $("#models-slide").css("height", $("#models-slide > .slide-item").outerHeight());
    })

    for (let i = 0; i <= $("#models-slide > .slide-item").length - 1; i++) {
        $("<span />", {class: "bullet"}).clone().appendTo("#models > .slide-control > .pagination");
        if (i == 0) {
            $("#models > .slide-control > .pagination > .bullet:first-of-type").addClass("active");
        }
    }

    var moveBulletNext = () => {
        if ($("#models > .slide-control > .pagination > .bullet:last-of-type").hasClass("active") === true) {
            $("#models > .slide-control > .pagination > .bullet.active").removeClass("active");
            $("#models > .slide-control > .pagination > .bullet:first-of-type").addClass("active");
        } else {
            $("#models > .slide-control > .pagination > .bullet.active").removeClass("active").next().addClass("active");
        }
    }

    var moveBulletPrev = () => {
        if ($("#models > .slide-control > .pagination > .bullet:first-of-type").hasClass("active") === true) {
            $("#models > .slide-control > .pagination > .bullet.active").removeClass("active");
            $("#models > .slide-control > .pagination > .bullet:last-of-type").addClass("active");
        } else {
            $("#models > .slide-control > .pagination > .bullet.active").removeClass("active").prev().addClass("active");
        }
    }

    var moveItemNext = () => {
        $("#models-slide > .slide-item:first-of-type").stop().animate({left: "-100%"}, {
            duration: 500,
            start: () => {
                $("#models-slide > .slide-item:nth-of-type(2)").stop().animate({left: 0}, 500);
            },
            complete: () => {
                $("#models-slide > .slide-item:first-of-type").insertAfter("#models-slide > .slide-item:last-of-type");
                $("#models-slide > .slide-item:last-of-type").css("left", "100%");
                moveBulletNext();
            }
        })
    }

    var moveItemPrev = () => {
        $("#models-slide > .slide-item:last-of-type").stop().animate({left: "-100%"}, {
            duration: 0,
            complete: () => {
                $("#models-slide > .slide-item:last-of-type").stop().animate({left: 0}, {
                    duration: 500,
                    start: () => {
                        $("#models-slide > .slide-item:first-of-type").stop().animate({left: "100%"}, 500);
                    },
                    complete: () => {
                        $("#models-slide > .slide-item:last-of-type").insertBefore("#models-slide > .slide-item:first-of-type");
                        moveBulletPrev();
                    }
                })
            }
        });
    }

    // setInterval(moveItemNext, 4000);

    $("#models > .slide-control > .move > .next").click(() => {
        moveItemNext();
    })

    $("#models > .slide-control > .move > .prev").click(() => {
        moveItemPrev();
    })
})
