function counter1(){
        var dday = new Date("Jan 31, 2024, 23:59:59").getTime();
            setInterval(function(){
                var now = new Date();
                var distance = dday - now;
                var day = Math.floor(distance / (1000*60*60*24));
                var hour = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
                var minu = Math.floor(distance % (1000*60*60) / (1000*60));
                var secon = Math.floor(distance % (1000*60)/1000);

                if(secon < 0){
                    secon = '0' + s;
                }
                $('.launch_time:first').html(day + "일" + hour + ":" + minu + ":" + secon)                
            },1000);
}

counter1();

function counter2(){
    var dday = new Date("Feb 28, 2024, 23:59:59").getTime();
        setInterval(function(){
            var now = new Date();
            var distance = dday - now;
            var day = Math.floor(distance / (1000*60*60*24));
            var hour = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
            var minu = Math.floor(distance % (1000*60*60) / (1000*60));
            var secon = Math.floor(distance % (1000*60)/1000);

            if(secon < 0){
                secon = '0' + s;
            }
            $('.launch_time:last').html(day + "일" + hour + ":" + minu + ":" + secon)                
        },1000);
}

counter2();