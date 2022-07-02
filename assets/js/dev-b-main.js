$(".trigger-overplay").on("click", function (e) {
    e.preventDefault();
    $(".b-overlay-scale").addClass("b-open");
  });
$(".overlay-close").on("click", function (e) {
    e.preventDefault();
    $(".b-overlay-scale").removeClass("b-open");
});
$(".pull-right-button").on("click", function (e) {
    e.preventDefault();
    $(".right-bar").addClass("b-open-right-bar");
    $(".pull-right-button").addClass("b-dl-none");
    $(".pull-right").addClass("pull-right-move");
    $(".pull-right > .pull-right-button").removeClass("b-dl-block");
    $(".pull-right > .pull-left-button").removeClass("b-dl-none");
    $(".pull-right > .pull-left-button").addClass("b-dl-block");
});
$(".pull-left-button").on("click", function (e) {
    e.preventDefault();
    $(".right-bar").removeClass("b-open-right-bar");
    $(".pull-right-button").addClass("b-dl-block");
    $(".pull-right > .pull-right-button").removeClass("b-dl-none");
    $(".pull-right > .pull-left-button").addClass("b-dl-none");
    $(".pull-right > .pull-left-button").removeClass("b-dl-block");
    $(".pull-right").removeClass("pull-right-move");
});
$(".fa-moon").on("click", function (e) {
    e.preventDefault();
    var root = document.querySelector(":root");
    root.style.setProperty("--dev-b-bg-color-1","#232220");
    root.style.setProperty("--dev-b-color-heading","#eee");
    root.style.setProperty("--dev-b-color-text","#c2d0da");
    root.style.setProperty("--dev-b-bg-grey","#282828");
    root.style.setProperty("--dev-b-bg-light","#232220");
    root.style.setProperty("--border-color-light","rgba(255, 255, 255, 0.1)");
    root.style.setProperty("--dev-b-color-text-a","#eee");
    $(".fa-sun").addClass("b-dl-block");
    $(".fa-moon").addClass("b-dl-none");
});
$(".fa-sun").on("click", function (e) {
    e.preventDefault();
    var root = document.querySelector(":root");
    root.style.setProperty("--dev-b-bg-color-1","#fff");
    root.style.setProperty("--dev-b-color-heading","#232121");
    root.style.setProperty("--dev-b-color-text","rgba(22, 28, 45, 0.7)");
    root.style.setProperty("--dev-b-bg-grey","#f7f7f7");
    root.style.setProperty("--dev-b-bg-light","#fff");
    root.style.setProperty("--border-color-light","#c2d0da");
    root.style.setProperty("--dev-b-color-text-a","#232121");
    $(".fa-sun").removeClass("b-dl-block");
    $(".fa-moon").removeClass("b-dl-none");
});

