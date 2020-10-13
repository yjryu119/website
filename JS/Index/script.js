

    $(function(){
       $(".intro").addClass("introshow");
       $(document).ready(function(){
           // $("body").smoothWheel();
       });
       $('.counter').counterUp({
           delay: 10,
           time: 1000
       });

       $(".navBar").each(function () {

           var $window = $(window), // 창을 jQuery 오브젝트 화
               $navthis = $(this),   // 헤더를 jQuery 객체 화
               // 헤더의 기본 위치를 검색
               menuOffsetTop = $navthis.offset().top;
               // 메뉴의 왼쪽 탑 값
           
           // 윈도우의 스크롤 이벤트를 모니터링
           // (창이 스크롤 할 때마다 작업을 수행하기)
           $window.on('scroll', function () {
               // 윈도우의 스크롤양을 확인하고
               // 헤더의 기본 위치를 지나서 있으면 클래스를 부여
               // 그렇지 않으면 삭제
               if ($window.scrollTop() > menuOffsetTop) {
                   $navthis.addClass('sticky');
               } else {
                   $navthis.removeClass('sticky');
               }
           });

           $window.trigger('scroll');
       });


       $(".mainMenu>li>a").click(function(){
           return false;
       });

       var li=$(".mainMenu>li>a");
       var cont=$(".wrapper .page");

       li.click(function(){
           var target=$(this).attr("title");


           var section=cont.eq(target);
           console.log(section);

           var offset=section.offset().top;
           console.log(offset);
           // offset은 뒤에 나오는 선택자의 위치를 알아낸다. top 0

           $("html, body").animate({
               scrollTop:offset
               // 눌렀을 때 offset의 top값을 scrolltop으로 가져온다.
           }, 600);
       });

               
       $(".mainMenu>li>a").mouseover(function(){     
           var newImg=$(this).attr("href");
           $("img",this).attr("src", newImg );
           $(this).stop().animate({paddingRight: 100 }, 1000);
       }).mouseout(function() {
           var originalImg=$("img", this).attr("alt");
           $(this).stop().animate({paddingRight: 0 }, 1000, function() {
               $("img",this).attr("src", originalImg );
           });
       });   


       var vis=true;
       //===================================
       $(window).on('scroll', function() {
           var sec4Top = $(".sectionskills").offset().top;
       
           // if(wScroll <=cont.eq(0).offset().top -600 ){
           //     cont.removeClass("show");

           if($(window).scrollTop() >= sec4Top - 600 && vis) {
               $(".meter > span").each(function() { 
                   $(this).data("origWidth", $(this).width())
                       .width(0)
                       .stop()
                       .animate({
                           width: $(this).data("origWidth") // or + "%" if fluid
                       },2500);
               });
               vis=false;
           }      
       });


       var typingBool = false; 
       var typingIdx = 0; 
       var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
       typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
       if(typingBool==false) { // 타이핑이 진행되지 않았다면 
           typingBool=true; 
           
           var tyInt = setInterval(typing,110); // 반복동작 
       }


       typingTxt = typingTxt.map((char) => { return char === 'z' ? '<br/>' : char }).filter((char) => char !== 'a')
       
       function typing() { 
           if(typingIdx<typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
               $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
               typingIdx++; 
           } else{ 
               clearInterval(tyInt); //끝나면 반복종료 
           } 
       }  
       
           



/*
$('.sectionskills').visible();

setTimeout(function(){
                       location.reload(); 
                    },1000);




========================  meter
$(".meter > span").each(function() { 
             $(this)
                   .data("origWidth", $(this).width())
                   .width(0)
                   .animate({
                   width: $(this).data("origWidth") // or + "%" if fluid
                   }, 1200);
               });
*/

               

   });

