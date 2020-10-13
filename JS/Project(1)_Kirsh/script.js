
$(function(){
    var nav=$(".nav>ul>li");
    var cont=$(".content>div");

    nav.click(function(){
        var target=$(this);
        var i=target.index();
        // console.log(i);

        var section=cont.eq(i);
        // console.log(section);
        var offset=section.offset().top;
        // offset은 뒤에 나오는 선택자의 위치를 알아낸다. top 0

        $("html, body").animate({
            scrollTop:offset
            // 눌렀을 때 offset의 top값을 scrolltop으로 가져온다.
        }, 400);
    });


            // $(".nav li").click(function(){
            //     var num=$(this).index()+1;
            //     console.log(num);
                
                
            //     $(".nav li a:not(:eq(num))").text("●");
            //     $("a", this).text(num); 
            // });


            $(window).on('scroll', function() {
                
            var sec1Top = $("#section1").offset().top;
            var sec2Top = $("#section2").offset().top;
            var sec3Top = $("#section3").offset().top;
            var sec4Top = $("#section4").offset().top;
            var sec5Top = $("#section5").offset().top;
            var sec6Top = $("#section6").offset().top;
            var num=0;
            var ind=0;
            
                    if($(window).scrollTop() >= sec1Top && $(window).scrollTop() < sec2Top ) {
                        num=1;
                        ind=0;

                    }else if($(window).scrollTop() >= sec2Top && $(window).scrollTop() < sec3Top ) {
                        num=2;
                        ind=1;
                    
                    }else if($(window).scrollTop() >= sec3Top && $(window).scrollTop() < sec4Top ) {
                        num=3;
                        ind=2;
                    
                    }else if($(window).scrollTop() >= sec4Top && $(window).scrollTop() < sec5Top ) {
                        num=4;
                        ind=3;
                    
                    }else if($(window).scrollTop() >= sec5Top && $(window).scrollTop() < sec6Top ) {
                        num=5;
                        ind=4;
                    
                    }else{
                        num=6;
                        ind=5;
                    }




                    $(".nav li a:not(:eq(num))").text("●");
                    $("a", ".nav li:eq("+ind+")").text(num); 
                     
            });



            $(".wrapper").hide();
            $(".lists").mouseover(function(){
                $(".wrapper").show();
            }).mouseout(function(){
                $(".wrapper").hide();
            });



                    $('.menu').each(function () {

                        var $window = $(window), // 창을 jQuery 오브젝트 화
                            $menu = $(this),   // 헤더를 jQuery 객체 화
                            // 헤더의 기본 위치를 검색
                            menuOffsetTop = $menu.offset().top;
                            // 메뉴의 왼쪽 탑 값
                        
                        // 윈도우의 스크롤 이벤트를 모니터링
                        // (창이 스크롤 할 때마다 작업을 수행하기)
                        $window.on('scroll', function () {
                            // 윈도우의 스크롤양을 확인하고
                            // 헤더의 기본 위치를 지나서 있으면 클래스를 부여
                            // 그렇지 않으면 삭제
                            if ($window.scrollTop() > menuOffsetTop) {
                                $menu.addClass('sticky');
                            } else {
                                $menu.removeClass('sticky');
                            }
                        });

                    $window.trigger('scroll');

                    
                    });
});
