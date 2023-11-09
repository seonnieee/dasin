// 세션 product1
$(function(){
    $.ajax({
        url: "./json/product1.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox1 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product1/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox1").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox1").eq(i).append("<span class='welcom_sale'>" + data[i].sale + "</span>");
                    $(".imgbox1").eq(i).append("<span class='welcom_price'>" + data[i].price + "</span>");
                    $(".imgbox1").eq(i).append("<span class='welcom_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product2
$(function(){
    $.ajax({
        url: "./json/product2.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox2 .imground2").eq(i).append("<a href='sub.html' target='_self'><img src='img/product2/" + data[i].url +"' alt='상품이미지'></a>");
                    $(".imgbox2").eq(i).append("<span class='launch_title'>" + data[i].title + "</span>");
                    $(".imgbox2").eq(i).append("<span class='launch_sale'>" + data[i].sale + "</span>");
                    $(".imgbox2").eq(i).append("<span class='launch_price'>" + data[i].price + "</span>");
                    $(".imgbox2").eq(i).append("<span class='launch_wonga'>" + data[i].wonga + "</span>");
                }
            }
        }
    })
});

// 세션 product3
$(function(){
    $.ajax({
        url: "./json/product3.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox3 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product3/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox3").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox3").eq(i).append("<span class='new_sale'>" + data[i].sale + "</span>");
                    $(".imgbox3").eq(i).append("<span class='new_price'>" + data[i].price + "</span>");
                    $(".imgbox3").eq(i).append("<span class='new_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product4
$(function(){
    $.ajax({
        url: "./json/product4.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox4 .imground3").eq(i).append("<a href='sub.html' target='_self'><img src='img/product4/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox4").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox4").eq(i).append("<span class='now_sale'>" + data[i].sale + "</span>");
                    $(".imgbox4").eq(i).append("<span class='now_price'>" + data[i].price + "</span>");
                    $(".imgbox4").eq(i).append("<span class='now_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product5
$(function(){
    $.ajax({
        url: "./json/product5.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox5 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product5/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox5").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox5").eq(i).append("<span class='gomin_sale'>" + data[i].sale + "</span>");
                    $(".imgbox5").eq(i).append("<span class='gomin_price'>" + data[i].price + "</span>");
                    $(".imgbox5").eq(i).append("<span class='gomin_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product6
$(function(){
    $.ajax({
        url:"./json/product6.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox6 .imground5").eq(i).append("<a href='sub.html' target='_self'><img src='img/product6/" + data[i].url + "' alt='상품이미지'></a>");
                }
            }
        }
    });
});

// 세션 product7
$(function(){
    $.ajax({
        url: "./json/product7.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox7 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product7/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox7").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox7").eq(i).append("<span class='daksin_sale'>" + data[i].sale + "</span>");
                    $(".imgbox7").eq(i).append("<span class='daksin_price'>" + data[i].price + "</span>");
                    $(".imgbox7").eq(i).append("<span class='daksin_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product8
$(function(){
    $.ajax({
        url: "./json/product8.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox8 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product8/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox8").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox8").eq(i).append("<span class='sikdan_sale'>" + data[i].sale + "</span>");
                    $(".imgbox8").eq(i).append("<span class='sikdan_price'>" + data[i].price + "</span>");
                    $(".imgbox8").eq(i).append("<span class='sikdan_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

//세션 product10
$(function(){
    $.ajax({
        url: "./json/product10.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox10 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product10/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox10").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox10").eq(i).append("<span class='health_sale'>" + data[i].sale + "</span>");
                    $(".imgbox10").eq(i).append("<span class='health_price'>" + data[i].price + "</span>");
                    $(".imgbox10").eq(i).append("<span class='health_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product11
$(function(){
    $.ajax({
        url: "./json/product11.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox11 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product11/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox11").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox11").eq(i).append("<span class='yasik_sale'>" + data[i].sale + "</span>");
                    $(".imgbox11").eq(i).append("<span class='yasik_price'>" + data[i].price + "</span>");
                    $(".imgbox11").eq(i).append("<span class='yasik_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product13
$(function(){
    $.ajax({
        url: "./json/product13.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox13 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product13/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox13").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox13").eq(i).append("<span class='matzip_sale'>" + data[i].sale + "</span>");
                    $(".imgbox13").eq(i).append("<span class='matzip_price'>" + data[i].price + "</span>");
                    $(".imgbox13").eq(i).append("<span class='matzip_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product14
$(function(){
    $.ajax({
        url: "./json/product14.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox14 .imground1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product14/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox14").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox14").eq(i).append("<span class='free_sale'>" + data[i].sale + "</span>");
                    $(".imgbox14").eq(i).append("<span class='free_price'>" + data[i].price + "</span>");
                    $(".imgbox14").eq(i).append("<span class='free_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product9, product12, product15
$(function(){
    $.ajax({
        url: "./json/product9.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".block1").eq(i).append("<a href='sub.html' target='_self'><img src='img/product9/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".block2").eq(i).append("<h3>" + data[i].title + "</h3>");
                    $(".block2").eq(i).append("<p>" + data[i].info + "</p>");
                    $(".block2").eq(i).append("<span class='price1_sale'>" + data[i].sale + "</span>");
                    $(".block2").eq(i).append("<span class='price1'>" + data[i].price + "</span>");
                    $(".block2").eq(i).append("<span class='price1_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});

// 세션 product16
$(function(){
    $.ajax({
        url: "./json/product16.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".imgbox16 .imground4").eq(i).append("<a href='sub.html' target='_self'><img src='img/product16/" + data[i].url + "' alt='상품이미지'></a>");
                    $(".imgbox16").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".imgbox16").eq(i).append("<span class='best_sale'>" + data[i].sale + "</span>");
                    $(".imgbox16").eq(i).append("<span class='best_price'>" + data[i].price + "</span>");
                    $(".imgbox16").eq(i).append("<span class='best_wonga'><del>" + data[i].wonga + "</del></span>");
                }              
            }
        }
    })
});


// 세션 식단팁
$(function(){
    $.ajax({
        url: "./json/tip_title.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".tip_img").eq(i).append("<img src='img/tip/" + data[i].url + "' alt='상품이미지'>");
                    $(".tip_img").eq(i).append("<a href='sub.html' target='_self'><div class='gradient'></div></a>");
                    $(".tip_text").eq(i).append("<h3><a href='#'>" + data[i].title + "</a></h3>");
                    $(".tip_text").eq(i).append("<p><a href='#'>" + data[i].info + "</a></p>");
                }              
            }
        }
    })
});

// 세션 고객리뷰
$(function(){
    $.ajax({
        url: "./json/review.json",
        dataType: "json",
        success : function(data){
            if(data.length>0){
                for(let i in data){
                    $(".review_sub").eq(i).append("<img src='img/review/" + data[i].url + "' alt='리뷰이미지'>");
                    $(".review_sub").eq(i).append("<h5>" + data[i].title + "</h5>");
                    $(".review_sub").eq(i).append("<p>" + data[i].review + "</p>");
                }              
            }
        }
    })
});

