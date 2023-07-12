$(document).ready(() => {

    $("#models > .slide").css("height", $("#models .item").outerHeight() + 'px');

    $(window).resize(() => {
        $("#models > .slide").css("height", $("#models .item").outerHeight() + 'px');
    })

    $("#models .item:first-of-type").css("left", 0);

    for (let i = 0; i <= $("#models .item").length - 1; i++) {
        $("<span />", {class: 'bullet'}).clone().appendTo("#models .pagination");
        if (i == 0) {
            $("#models .pagination > .bullet:first-of-type").addClass("active");
        }
    }

    var bulletNext = function () {
        if ($("#models .pagination > .bullet:last-of-type").hasClass("active") === true) {
            $("#models .pagination > .bullet.active").removeClass("active");
            $("#models .pagination > .bullet:first-of-type").addClass("active");
        } else {
            $("#models .pagination > .bullet.active").removeClass("active").next().addClass("active");
        }
    }

    var bulletPrev = function () {
        if ($("#models .pagination > .bullet:first-of-type").hasClass("active") === true) {
            $("#models .pagination > .bullet.active").removeClass("active");
            $("#models .pagination > .bullet:last-of-type").addClass("active");
        } else {
            $("#models .pagination > .bullet.active").removeClass("active").prev().addClass("active");
        }
    }

    var move = function () {
        $("#models .item:first-of-type").stop().animate({left: '-100%'}, {
            duration: 500,
            start: function () {
                $("#models .item:nth-of-type(2)").stop().animate({left: 0}, 500);
            },
            complete: function () {
                $("#models .item:first-of-type").insertAfter("#models .item:last-of-type");
                $("#models .item:last-of-type").css("left", '100%');
                bulletNext();
            }
        })
    }

    var moveReverse = function () {
        $("#models .item:last-of-type").stop().animate({left: '-100%'}, {
            duration: 0,
            complete: function () {
                $("#models .item:last-of-type").stop().animate({left: 0}, {
                    duration: 500,
                    start: function () {
                        $("#models .item:first-of-type").stop().animate({left: '100%'}, 500);
                    },
                    complete: function () {
                        $("#models .item:last-of-type").insertBefore("#models .item:first-of-type");
                        bulletPrev();
                    }
                })
            }
        })
    }

    setInterval(move, 3000);

    $("#models > .btn.next").click(() => {
        move();
    })

    $("#models > .btn.prev").click(() => {
        moveReverse();
    })
})
