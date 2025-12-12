$(datas).each((idx, data) => {
            
                            // data.map(([요소], [인덱스], [배열])=>{});
            const desc = data.description.map(ele=> `<li>${ele}</li>`
                                                ).join('');

            const card = `<div class="box_office_card motion position-relative col-lg col-md-6">
            <div class="inner" title="영화 상세보기">
                <div class="front">
                    <span class="rank">${data.rank}</span>
                    <div class="poster">
                        <img class = "w-100 h-100 object-fit-cover" src="${data.poster}" alt="${data.title}">
                    </div>
                </div> <!-- //front -->
                <div class="back">
                    <ul>${data.description}${desc}</ul>
                        <div class="worktime">작업시간<span>${data.worktime}</span></div>
                </div> <!-- //back -->
            </div>
            <!-- btn -->
            <div class="btn mb-2">
                <span class="mt-1 worktype">${data.task}</span>
                <a href="${data.siteurl}" class="btn btn-outline-secondary mt-1 sitelink">사이트 바로가기</a>
            </div>
        </div>` 
        
        $('.portfolio').append(card);
    }); // forEach()