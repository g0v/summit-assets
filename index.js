$(function() {
    if ($.fn.lazyload) {
        document.documentElement.className = '';
    }

    $(".page-link").on("click", function (e) {
        renderPage($(this).data("page"))
    })

    $("img.lazy").lazyload({
        effect : "fadeIn"
    });

    if (window.location.hash != "" ){
        renderPage("page-" + window.location.hash.replace("#", ""))
    } else {
        renderPage($($(".page-link")[0]).data("page"))
    }

})


function clearActive() {
    $(".page-link").parent().removeClass("active")
}

function renderPage(page) {
    clearActive()
    $(".page").css("display", "none")
    $(".page").removeClass("active-page")
    $("#" + page).css("display", "block")
    $("#" + page).addClass("active-page")
    $("#link-" + page).parent().addClass("active")
    $("img.lazy").lazyload();
}

