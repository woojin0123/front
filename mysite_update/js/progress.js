function runCounter($counter) {
        var target = parseInt($counter.attr("data-target")),
            count = 0,
            speed = 50;

        $counter.text(0);

        var counterInterval = setInterval(function () {
            count++;
            if (count >= target) {
                clearInterval(counterInterval);
            }
            // 바 증가
            $counter.parent(".progress-bar").css("width", count + "%");
            // 숫자(퍼센트) 증가
            $counter.text(count + "%");
        }, speed);
    } // function runCounter($counter) end
