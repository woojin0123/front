let slideIndex = 1;
    let scale = 1, pointX = 0, pointY = 0, start = { x: 0, y: 0 }, isDragging = false;

    // 잡지 열기 함수
    function openMagazine(element, index) {
        const wrapper = element.closest('.magazine-wrapper');
        const images = wrapper.querySelectorAll('img');
        const container = document.getElementById('slideContainer');
        
        container.innerHTML = ''; // 초기화
        images.forEach(img => {
            const div = document.createElement('div');
            div.className = 'mySlides';
            div.innerHTML = `<img src="${img.src}">`;
            container.appendChild(div);
        });

        document.getElementById("magazineModal").style.display = "flex";
        document.body.style.overflow = "hidden";
        resetZoom();
        currentSlide(index);
    }

    function closeModal() {
        document.getElementById("magazineModal").style.display = "none";
        document.body.style.overflow = "auto";
    }

    function plusSlides(e, n) {
        e.stopPropagation();
        resetZoom();
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const counter = document.getElementById("modalCounter");
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        for (let i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
        if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
        counter.innerHTML = slideIndex + " / " + slides.length;
    }

    // 줌 및 드래그 관련
    const modalArea = document.getElementById("modalArea");
    function setTransform() {
        const slides = document.getElementsByClassName("mySlides");
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
        }
    }
    function resetZoom() { scale = 1; pointX = 0; pointY = 0; setTransform(); }

    modalArea.onwheel = function(e) {
        e.preventDefault();
        (e.deltaY < 0) ? (scale *= 1.1) : (scale /= 1.1);
        if (scale < 1) scale = 1;
        setTransform();
    }
    modalArea.onmousedown = function(e) {
        if (scale === 1) return;
        isDragging = true;
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
    }
    window.onmousemove = function(e) {
        if (!isDragging) return;
        pointX = e.clientX - start.x;
        pointY = e.clientY - start.y;
        setTransform();
    }
    window.onmouseup = function() { isDragging = false; }

    function handleBgClick(event) {
        if (!event.target.closest('img') && !event.target.closest('button')) {
            closeModal();
        }
    }
