$(document).ready(function() {
    let positions = { release: 0, self: 0, plan: 0 };

    $('.slide-next, .slide-prev').click(function() {
        const target = $(this).data('target');
        const isNext = $(this).hasClass('slide-next');
        const $wrapper = $('#slider-' + target + ' .slider-wrapper');
        const $items = $wrapper.find('.slide-item');
        
        if ($items.length === 0) return;

        // 아이템 너비 + 넓어진 간격(50px)
        const itemWidth = $items.eq(0).outerWidth();
        const moveDistance = itemWidth + 60; 
        const maxScroll = $items.length - 3;

        if (isNext && positions[target] < maxScroll) {
            positions[target]++;
        } else if (!isNext && positions[target] > 0) {
            positions[target]--;
        }

        $wrapper.css('transform', `translateX(${-positions[target] * moveDistance}px)`);
    });
});
