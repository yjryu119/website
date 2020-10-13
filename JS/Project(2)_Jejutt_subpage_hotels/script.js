
$(function(){

    $(".pics p").css("width", 310*$(".pics img").size()+"px"); 
    
    $(".nx").click(function(){
        var num=$(this).attr("alt");

        abc(num);


    });

    $(".pre").click(function(){
        var num2=$(this).attr("alt");
        bcd(num2);
    });


    function abc(num){
        var flim=$(".pics"+num+" p");

        flim.animate({
            marginLeft: "-=310px"
        }, 400, "linear", function () {
            $("img:first", ".pics"+num+" p").appendTo(".pics"+num+" p");
            flim.css("margin-left", "0px");
        });


        // nx를 클릭했을 때 alt의 값을 불러오고 num에 넣는다. 그리고 abc에 num값을 넣어서 실행한다.
        // abc를 실행할 때 num값을 그대로 가져와서 각 alt에 해당하는 값이 대입된다.
        // 즉 alt1 첫번째 nx를 클릭했을 때는 pics1 의 p 즉 필름이 해당된다. 
        // 그 P값은 film으로 변수값을 지정한다.
        // 해당 film은 왼쪽으로 310px이동한다.
        // 이때 화면 밖으로 즉 -310px부터 0px에 위치한 첫번 째 사진은 appendTo로 맨 뒤로 보낸다.
        // 여기서 알아야 할 부분은 appendTo나 prependTo가 그대로 보내기만 하지 위치 이동은 없다는 것이다.
        // 그렇기 때문에 첫번째 사진을 맨 뒤로 보내면 자연스레 두번째 사진이 -310 자리에 오게된다. 
        // 고로 appendTo로 보내고 당겨진 사진은 그다음에 보여져야할 사진이기에 항상 margin left 0값으로 설정해서 제자리로 돌아가게한다. 


    }

    function bcd(num2){
        $("img:last", ".pics"+num2+" p").prependTo(".pics"+num2+" p");
        $(".pics"+num2+" p").css("margin-left", "-310px");

        var flim=$(".pics"+num2+" p");
        console.log(flim);

        flim.animate({
            marginLeft: "+=310px"
        }, 400, "linear");


        // pre를 클릭했을 때 num2를 받아 실행한다.
        // nx와 다르게 이동할 때 앞에 아무 사진이 없기 때문에 미리 마지막 장을 대기시켜줘야한다.
        // 그래서 prepend는  필름 이동 전에 미리 실행하여 사진을 대기시킨다.
        // 대기만 시키면 안되고 첫째 장의 앞에 안보이는 부분에 대기시켜야 하기 때문에 이 사진의 대기장소는 -310으로 고정해놓는다.
        // 이제 필름을 옮긴다. marginleft에 310만큼의 공간이 생긴다. 오른쪽으로 310만큼 이동.
        // 첫째장의 앞에 대기중이던 마지막 사진이 0으로 오면서 화면에 보인다. 
    }

});


            