$(window).on('load', function() { 
  $('#status').fadeOut(); 
  $('#preloader').delay(350).fadeOut('slow'); 
  $('body').delay(350).css({'overflow':'visible'});
})



$(document).ready(() => {
    
    
    function logingPageFunc(){
        $(".welcome").animate({
        fontSize: "16px"
        },2000);
        $(".tabs").animate({
        opacity:1
        },2500);
        $(".clock").animate({
        opacity:1
        },2500);
        $(".docpic").animate({
        right:0
        },2500);
        
        
    };  


    setTimeout(logingPageFunc,10);


    $(".css3button").click(() => {
        
        window.location.href="admin.html";
        return false;
    });

   

});


$(document).ready(() => {
    
    
     $(".logoutbtn").click(() => {
        window.location.href="index.html";
        return false;
    });

   

});
//----------------------------//



