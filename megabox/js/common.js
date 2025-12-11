// header 2depth background

// 5번째 메뉴는 제외(하위메뉴 없음)
$('.main > li:not(:nth-of-type(5)').mouseenter(function(){
    $('#header').addClass('active');
    $(this).find('.sub').addclass('active');
    // $(this)는 마우스가 들어간 메인메뉴 li
});
$('.main > li').mouseleave(()=>{
    $('#gnb .sub').removeClass('active');
});
$('#header .subbar').mouseenter(()=> {
    $('#header').removeClass('active');
});
// footer - looking for theater
$(".btn_looking_theater").on("click", () => {
    $(".theater").addClass("active");
});
$(".closed").on("click", () => {
    $(".theater").removeClass("active");
});