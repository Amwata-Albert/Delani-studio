$(document).ready(function(){

    $(".port1").hover(function(){
        $(".port1").css("opacity","0.1");
        $('.text2').fadeIn();
    },function(){
        $(".port1").css("opacity","1");
        $(".text2").fadeOut();
    });


    $(".port2").hover(function(){
        $(".port2").css("opacity","0.1");
        $('.text3').fadeIn();
    },function(){
        $(".port2").css("opacity","1");
        $(".text3").fadeOut();
    });


    $(".port3").hover(function(){
        $(".port3").css("opacity","0.1");
        $('.text4').fadeIn();
    },function(){
        $(".port3").css("opacity","1");
        $(".text4").fadeOut();
    });


    $(".port4").hover(function(){
        $(".port4").css("opacity","0.1");
        $('.text5').fadeIn();
    },function(){
        $(".port4").css("opacity","1");
        $(".text5").fadeOut();
    });


    $(".port5").hover(function(){
        $(".port5").css("opacity","0.1");
        $('.text6').fadeIn();
    },function(){
        $(".port5").css("opacity","1");
        $(".text6").fadeOut();
    });

    $(".port6").hover(function(){
        $(".port6").css("opacity","0.1");
        $('.text7').fadeIn();
    },function(){
        $(".port6").css("opacity","1");
        $(".text7").fadeOut();
    });

    $(".port7").hover(function(){
        $(".port7").css("opacity","0.1");
        $('.text8').fadeIn();
    },function(){
        $(".port7").css("opacity","1");
        $(".text8").fadeOut();
    });
    

    $(".port8").hover(function(){
        $(".port8").css("opacity","0.1");
        $('.text9').fadeIn();
    },function(){
        $(".port8").css("opacity","1");
        $(".text9").fadeOut();
    });
});

$(document).ready(function(){
    $('.A1').click(function(){
        $('.B1').toggle();
        $('.A1 img').toggle();
    });

    $('.A2').click(function(){
        $('.B2').toggle();
        $('.A2 img').toggle();
    });

    $('.A3').click(function(){
        $('.B3').toggle();
        $('.A3 img').toggle();
    });

    // SAMPLE PORTFOLIO

    $('.C').hover(function(){
        $('.D').show();
        $('.C img').css({
            opacity:0.4
        });

    });
    $('.C').mouseleave(function(){
        $('.C img').css({
            opacity:1
        });
        $('.D').hide();
    });

    $('.C1').hover(function(){
        $('.D1').show();
        $('.C1 img').css({
            opacity:0.4
        });

    });
    $('.C1').mouseleave(function(){
        $('.C1 img').css({
            opacity:1
        });
        $('.D1').hide();
    });

    $('.C2').hover(function(){
        $('.D2').show();
        $('.C2 img').css({
            opacity:0.4
        });

    });
    $('.C2').mouseleave(function(){
        $('.C2 img').css({
            opacity:1
        });
        $('.D2').hide();
    });

    $('.C3').hover(function(){
        $('.D3').show();
        $('.C3 img').css({
            opacity:0.4
        });

    });
    $('.C3').mouseleave(function(){
        $('.C3 img').css({
            opacity:1
        });
        $('.D3').hide();
    });

    $('.C4').hover(function(){
        $('.D4').show();
        $('.C4 img').css({
            opacity:0.4
        });

    });
    $('.C4').mouseleave(function(){
        $('.C4 img').css({
            opacity:1
        });
        $('.D4').hide();
    });

    $('.C5').hover(function(){
        $('.D5').show();
        $('.C5 img').css({
            opacity:0.4
        });

    });
    $('.C5').mouseleave(function(){
        $('.C5 img').css({
            opacity:1
        });
        $('.D5').hide();
    });

    $('.C6').hover(function(){
        $('.D6').show();
        $('.C6 img').css({
            opacity:0.4
        });

    });
    $('.C6').mouseleave(function(){
        $('.C6 img').css({
            opacity:1
        });
        $('.D6').hide();
    });
    $('.C7').hover(function(){
        $('.D7').show();
        $('.C7 img').css({
            opacity:0.4
        });

    });
    $('.C7').mouseleave(function(){
        $('.C7 img').css({
            opacity:1
        });
        $('.D7').hide();
    });
});

