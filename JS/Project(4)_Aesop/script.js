
$(function(){



    $(".arrow_left").click(function(){
        $(".pro_lists").animate({
            marginLeft: "0px"
        }, 400, "linear");
    });


    $(".arrow_right").click(function(){
        $(".pro_lists").animate({
            marginLeft: "-310px"
        }, 400, "linear");
    });



    $(".sub_list").hide();
    $(".main_list").hover(function(){
        $(".sub_list",this).stop().fadeIn("fast");

    },function(){
        $(".sub_list",this).stop().fadeOut("fast");
    } );


    $(".nav").hover(function(){
        // $(this).css("backgroundColor", "rgba(255, 255, 255, 0.486)")
        $(this).removeClass("navioriginal");
        $(this).addClass("navback");

    }, function(){
        // $(this).css("backgroundColor", "transparent")
        $(this).removeClass("navback");
        $(this).addClass("navoriginal");
    }
    );


    var cont=$(".cont");
    console.log(cont.eq(3).offset().top);

    $(window).scroll(function(){
    var wScroll=$(window).scrollTop();

        if(wScroll <=cont.eq(0).offset().top -600 ){
            cont.removeClass("show");
        }
        if(wScroll >= cont.eq(0).offset().top - 400){
            // cont.eq(3).removeClass("show");
            cont.eq(0).addClass("show");
        }
        if(wScroll >= cont.eq(1).offset().top - 400){
            cont.eq(0).removeClass("show");
            cont.eq(1).addClass("show");
        }
        if(wScroll >= cont.eq(2).offset().top - 400){
            cont.eq(1).removeClass("show");
            cont.eq(2).addClass("show"); 
            console.log("aa:"+wScroll)
        }
        if(wScroll >= cont.eq(3).offset().top -300){
            cont.eq(2).removeClass("show");
            cont.eq(3).addClass("show");
       
        }
    });


    

    


});


