$(function(){

    // GNB (세로형 1열)
    // $(".mainLi").mouseover(function(){
    //     $(this).children("ul.subMenu").stop().slideDown(400);
    // });    
    // $(".mainLi").mouseout(function(){
    //     $(this).children("ul.subMenu").stop().slideUp(900);
    // });

    // GNB (세로형 2열)
    $(".mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(800);
    });    
    $(".mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(200);
    });

    setInterval(fnSlide, 3000);
    
    // slideshow (세로형)
    // function fnSlide() {
    //     $("#shuttleFrame").animate(
    //         {"margin-top": "-350px"},
    //         1600,
    //         function() {
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({"margin-top": "0"});
    //         }
    //     );
    // }
    
    // slideshow (가로형)
    // function fnSlide() {
    //     $("#shuttleFrame").animate(
    //         {"margin-left": "-780px"},
    //         1600,
    //         function() {
    //             $("#slide a:first-child").insertAfter("#slide a:last-child");
    //             $(this).css({"margin-left": "0"});
    //         }
    //     );
    // }
    
    // slideshow (교차 전환형)
    function fnSlide() {
        $("#slide a").eq(0).fadeOut(
            500,
            function(){
                $(this).insertAfter("#slide a:last-child");        
            }
            );
        $("#slide a").eq(1).fadeIn(1000)
    }

    // 레이어팝업
    $("tr#popPoint").click(function(){
        $("div#layerBG").css("display", "block");
    });
    $("#closeBtnArea>button").click(function(){
        $("div#layerBG").css("display", "none");
    });

});