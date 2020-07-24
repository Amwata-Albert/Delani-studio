$(document).ready(function(){
    $('.toggle1').click(function(){
        $('.toggle1').toggle();
    });
    $('.toggle2').click(function(){
        $('.toggle2').toggle();
    });
    $('.toggle3').click(function(){
        $('.toggle3').toggle();
    });
    // $("#images1").hover(function(){
    //     $(".port1").css({
    //         opacity:0.1
    //     });$('.text2').css(
    //         "background-color", "red"
    //     )
    // },function(){
    //     $(".port1").css({
    //         opacity:0.1
    //     });
    // });
    $(".port1").hover(function(){
        $(".port1").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port1").css("opacity","1");
        $(".text2").fadeOut();
    });


    $(".port2").hover(function(){
        $(".port2").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port2").css("opacity","1");
        $(".text2").fadeOut();
    });


    $(".port3").hover(function(){
        $(".port3").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port3").css("opacity","1");
        $(".text2").fadeOut();
    });


    $(".port4").hover(function(){
        $(".port4").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port4").css("opacity","1");
        $(".text2").fadeOut();
    });


    $(".port5").hover(function(){
        $(".port5").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port5").css("opacity","1");
        $(".text2").fadeOut();
    });

    $(".port6").hover(function(){
        $(".port6").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port6").css("opacity","1");
        $(".text2").fadeOut();
    });

    $(".port7").hover(function(){
        $(".port7").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port7").css("opacity","1");
        $(".text2").fadeOut();
    });
    

    $(".port8").hover(function(){
        $(".port8").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port8").css("opacity","1");
        $(".text2").fadeOut();
    });
});

