$(document).ready(function() {
    $('.tab-link').click(function(e) {
        e.stopPropagation(); // 중첩 탭 클릭 시 상위로 이벤트 전파 방지
        
        var tab_id = $(this).attr('data-tab');
        var $parentContainer = $(this).closest('.tabb, .tab-content'); // 현재 탭이 속한 영역 찾기

        // 1. 현재 클릭한 탭 리스트에서만 클래스 제거/추가
        $(this).siblings('.tab-link').removeClass('current');
        $(this).addClass('current');

        // 2. 해당 영역 내의 직계 콘텐츠만 제어 (전체 .tab-content를 건드리지 않음)
        // tab-2 안에 있는 tab-5, 6 등을 독립적으로 제어하기 위함
        $('#' + tab_id).siblings('.tab-content').removeClass('current');
        $('#' + tab_id).addClass('current');
    });
});
