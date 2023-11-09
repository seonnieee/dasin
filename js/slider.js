function slide(){
    $('#sliderimg').stop().animate({marginLeft:-1900},1000,function(){
        $('#sliderimg li:first').appendTo('#sliderimg');
        $('#sliderimg').css({marginLeft:0});
    });
};

setInterval(slide, 5000);