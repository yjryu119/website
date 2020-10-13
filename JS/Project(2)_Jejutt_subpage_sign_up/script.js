
$(function(){
$(".signIn").hide();



$(".in").click(function(){

var result=$(".signIn").is(":visible");     

    if(result==true){
        $(".signIn").hide(230, "linear");
        }else{
        $(".signIn").show(230, "linear");    
        }

    });


});