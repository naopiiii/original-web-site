$(function () {
    $("#contents").hide();

    $(".business").on("mouseover", function() {
        $(this).parent().find("#contents").slideDown(500);
    });
})
