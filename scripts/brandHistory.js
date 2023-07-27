// $(document).ready(() => {
//     const article = $("#content > article");
//     var last_scrollT = 0;
//
//     $(window).scroll((e) => {
//         var scrollT = $(e.currentTarget).scrollTop();
//
//         if (scrollT > $("#intro").height()) {
//             for (var i = 0; i < article.length; i++) {
//                 if (scrollT > last_scrollT) {
//                     if (scrollT == $("#year2013").position().top) {
//                         i++;
//                         console.log(i);
//                         break;
//                     }
//                 }
//             }
//             last_scrollT = scrollT;
//         } else {
//             return;
//         }
//     })
// })

$(document).ready(() => {
    const yearCounter = $("#yearCounter");
    let paddingTop = ($("header").outerHeight() + yearCounter.outerHeight()) * 2;

    $(window).scroll(() => {
        var scrollT = $(window).scrollTop();

        if (scrollT <= $("#year2012").position().top + $("#year2012").height() - paddingTop) {
            $("#yearCounter-2012").prop("checked", true);
        } else if (scrollT >= $("#year2013").position().top - paddingTop && scrollT <= $("#year2013").position().top + $("#year2013").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2013").prop("checked", true);
        } else if (scrollT >= $("#year2014").position().top - paddingTop && scrollT <= $("#year2014").position().top + $("#year2014").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2014").prop("checked", true);
        } else if (scrollT >= $("#year2015").position().top - paddingTop && scrollT <= $("#year2015").position().top + $("#year2015").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2015").prop("checked", true);
        } else if (scrollT >= $("#year2016").position().top - paddingTop && scrollT <= $("#year2016").position().top + $("#year2016").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2016").prop("checked", true);
        } else if (scrollT >= $("#year2017").position().top - paddingTop && scrollT <= $("#year2017").position().top + $("#year2017").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2017").prop("checked", true);
        } else if (scrollT >= $("#year2018").position().top - paddingTop && scrollT <= $("#year2018").position().top + $("#year2018").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2018").prop("checked", true);
        } else if (scrollT >= $("#year2019").position().top - paddingTop && scrollT <= $("#year2019").position().top + $("#year2019").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2019").prop("checked", true);
        } else if (scrollT >= $("#year2020").position().top - paddingTop && scrollT <= $("#year2020").position().top + $("#year2020").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2020").prop("checked", true);
        } else if (scrollT >= $("#year2021").position().top - paddingTop && scrollT <= $("#year2021").position().top + $("#year2021").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2021").prop("checked", true);
        } else if (scrollT >= $("#year2022").position().top - paddingTop && scrollT <= $("#year2022").position().top + $("#year2022").outerHeight() - paddingTop * 2) {
            $("#yearCounter-2022").prop("checked", true);
        }
    })
})
