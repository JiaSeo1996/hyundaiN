$(document).ready(() => {
    if (navigator.userAgent.match(/iPhone|iPad/)) {
        $(".need-device-filter").addClass("ios");
    } else {
        $(".need-device-filter").removeClass("ios");
    }
})
