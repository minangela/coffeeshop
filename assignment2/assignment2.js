

$("h1").css("color", $title_color);
$("body").css("background", $page_bg);

$("button.alt1").on("mouseenter", function () {
	$("body").css("background", "#7a530f");
});

$("button.alt2").on("mouseenter", function () {
	$("body").css("background", "#ffff77");
	$("h1").css("color", "#3d3f3f");
});

$("button.alt1").on("mouseleave", function () {
	$("body").css("background", $page_bg);
});
$("button.alt2").on("mouseleave", function () {
	$("body").css("background", $page_bg);
	$("h1").css("color", $title_color);
});








console.log("Assignment 2: Amin Coffeeshop");

