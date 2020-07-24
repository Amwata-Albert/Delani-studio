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
    $(".port1").hover(function(){
        $(".port1").css({
            opacity:0.1
        });$('.text2').css({
            
        })
    },function(){
        $(".port1").css({
            opacity:1
        });
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