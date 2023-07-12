$(document).ready(() => {

    $("#banner .item:first-of-type").css("left", 0);

    var videoPlay = function () {
        $("#banner .item:first-of-type").find('video').get(0).currentTime = 0;
        $("#banner .item:first-of-type").find('video').get(0).play();
    }

    videoPlay();

    for (let i = 0; i <= $("#banner .item").length - 1; i++) {
        $("<span />", {class: 'bullet'}).clone().appendTo("#banner > .pagination");

        if ( i == 0) {
            $("#banner > .pagination > .bullet:first-of-type").addClass("active");
        }
    }


    var bulletNext = function () {
        if ($("#banner .pagination .bullet:last-of-type").hasClass("active") === true) {
            $("#banner .pagination .bullet.active").removeClass("active");
            $("#banner .pagination .bullet:first-of-type").addClass("active");
        } else {
            $("#banner > .pagination > .bullet.active").removeClass("active").next().addClass("active");
        }
    }

    var bulletPrev = function () {
        if ($("#banner .pagination .bullet:first-of-type").hasClass("active") === true) {
            $("#banner .pagination .bullet.active").removeClass("active");
            $("#banner .pagination .bullet:last-of-type").addClass("active");
        } else {
            $("#banner > .pagination > .bullet.active").removeClass("active").prev().addClass("active");
        }
    }

    var move = function () {
        $("#banner .item:first-of-type").stop().animate({left: '-100%'}, {
            duration: 500,
            start: function () {
                $("#banner .item:nth-of-type(2)").stop().animate({left: 0}, 500);
            },
            complete: function () {
                $("#banner .item:first-of-type").insertAfter("#banner .item:last-of-type");
                $("#banner .item:last-of-type").css("left", '100%');
                autoMove();
                videoPlay();
                bulletNext();
            }
        })
    }

    var moveReverse = function () {
        $("#banner .item:last-of-type").stop().animate({left: '-100%'}, {
            duration: 0,
            complete: function () {
                $("#banner .item:last-of-type").stop().animate({left: 0}, {
                    duration: 500,
                    start: function () {
                        $("#banner .item:first-of-type").stop().animate({left: '100%'}, 500);
                    },
                    complete: function () {
                        $("#banner .item:last-of-type").insertBefore("#banner .item:first-of-type");
                        videoPlay();
                        bulletPrev();
                    }
                })
            }
        });
    }

    var autoMove = function () {
        $("#banner .item:first-of-type video").on({
            ended: function() {
                move()
            }
        })
    }

    autoMove();

    $("#banner > .btn.next").click(() => {
        move();
    })

    $("#banner > .btn.prev").click(() => {
        moveReverse();
    })
})

