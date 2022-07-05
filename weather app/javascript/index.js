$(document).ready(function() {
    $(".search").click(function() {
        alert("chuc may man lan sau");
    });
});
$(".search_btn").hover(function() {
    $(".search_btn").css("background-color", "grey");
});
$(".search_btn").mouseleave(function() {
    $(".search_btn").css("background-color", "initial");
});
$(".btn-date").mouseenter(function() {
    document.getElementById('date').innerHTML = Date();
});
$(".btn-date").mouseleave(function() {
    document.getElementById('date').innerHTML = "";
})