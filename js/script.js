
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

function cllick(){
    let username=document.getElementById("ll1").value;
    let email=document.getElementById("ll2").value;
     alert(username + " @" + email +": we have received your message. Thank you for reaching out to us. ");
}
