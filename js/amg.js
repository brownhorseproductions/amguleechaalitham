$( document ).ready(function() {
    $("#viewDetail").click(function(e) {
        e.preventDefault();
        $("#bankDetail").toggle();
        var html = $(this).html();
        if(html == "View Details") {
            $(this).html("Hide Details")
        } else {
            $(this).html("View Details")
        }
    });

});

/*var preload = ["img/bg.jpg"];
console.log("preload");
var promises = [];
for (var i = 0; i < preload.length; i++) {
    (function(url, promise) {
        var img = new Image();
        img.onload = function() {
          promise.resolve();
        };
        img.src = url;
    })(preload[i], promises[i] = $.Deferred());
}
$.when.apply($, promises).done(function() {
    $(".homeHeader").css('background','url(img/bg.jpg) no-repeat center center / cover rgba(0, 0, 0, 0)');
});*/

$('.tw-popup').click(function(event) {
    var width  = 580,
    height = 325,
    left   = ($(window).width()  - width)  / 2,
    top    = ($(window).height() - height) / 2,
    url    =  $(this).attr('rel'),
    opts   = 'status=1' +
             ',width='  + width  +
             ',height=' + height +
             ',top='    + top    +
             ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
});

$('.fb-popup').click(function(event) {
    var width  = 580,
    height = 325,
    left   = ($(window).width()  - width)  / 2,
    top    = ($(window).height() - height) / 2,
    url    =  $(this).attr('rel'),
    opts   = 'status=0,toolbar=0' +
             ',width='  + width  +
             ',height=' + height +
             ',top='    + top    +
             ',left='   + left;

    window.open(url, 'sharer', opts);

    return false;
});

$('.go-popup').click(function(event) {
    var width  = 580,
    height = 325,
    left   = ($(window).width()  - width)  / 2,
    top    = ($(window).height() - height) / 2,
    url    =  $(this).attr('rel'),
    opts   = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes' +
             ',width='  + width  +
             ',height=' + height +
             ',top='    + top    +
             ',left='   + left;

    window.open(url, 'google', opts);

    return false;
});
