var isDetailOpenned = false;

$(".card-container").on("mouseover", function(){
    if (!isDetailOpenned){
        $(this).find(".card-slide-up").addClass("open");
    }
});

$(".card-container").on("mouseout", function(){
    $(this).find(".card-slide-up").removeClass("open");
});

$(".card-container").on("click", function(){
    if (!isDetailOpenned){
        $(this).addClass("open");
        $(this).find(".card-detail").addClass("open");
        isDetailOpenned = true;
    } else {
        $(this).find(".card-detail").removeClass("open");
        isDetailOpenned = false;
        $(this).removeClass("open");
    }
    console.log("card clicked!");
});