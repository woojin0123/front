$(document).ready(function () {
    // 각 스킬 바를 하나씩 처리
    $('.skill-bar').each(function () {
        var $bar = $(this);
        var $count = $bar.find('.count');
        var target = parseInt($bar.attr('data-target')); // 목표 수치
        var current = 0;
        var speed = 30; // 낮을수록 빠름

        var timer = setInterval(function () {
            if (current >= target) {
                clearInterval(timer);
            } else {
                current++;
                // 바 너비 업데이트
                $bar.css('width', current + '%');
                // 숫자 텍스트 업데이트
                $count.text(current);
            }
        }, speed);
    });
});