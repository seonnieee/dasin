$(document).ready(function(){
    $('.menu > li').not('#all').mouseover(function(){
        $('.sub_detail').stop().slideDown("fast");
    }).mouseout(function(){
        $('.sub_detail').stop().slideUp("fast");
    });
});