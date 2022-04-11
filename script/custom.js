//메뉴
$(".bottom_menu > ul > li").hover(function(){
   $(this).find(".submenu").stop().slideDown(); 
}, function(){
    $(this).find(".submenu").stop().slideUp();
})

//이미지 슬라이드
        var slideCount = $(".slideImg").length //현재 이미지 개수를 구한다. 
        var currentIndex = 0;       //현재 이미지를 변수에 저장

        setInterval(function(){
            if(currentIndex < slideCount -1){
                currentIndex++
            } else {
                currentIndex = 0;
            }
            var slidePosition = currentIndex * (-500)+"px";

            //console.log(slidePosition);
            $(".slideList").animate({ top:slidePosition},400);
        },3000);

//자주하는질문 탭 메뉴
var queBtn = $(".nav > ul > li")
var queCont = $(".cont1_desc > div")

queCont.hide().eq(0).show();

queBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    queBtn.removeClass("active");
    target.addClass("active");
    queCont.css("display","none");
    queCont.eq(index).css("display","block");
});






