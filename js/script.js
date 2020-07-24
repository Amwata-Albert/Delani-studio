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


});

// $(document).ready(function(){
   
// });
// $(document).ready(function(){
    
// });
// $(document).ready(fu(){
   
// $(document).ready(function() {

//     $('.gallery-item').hover(function() {
//       $(this).find('.img-title').fadeIn(300);
//     }, function() {
//       $(this).find('.img-title').fadeOut(100);
//     });

//   });
