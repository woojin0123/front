gift_list.forEach((item) => {
  const gift = `   <div class="gift_item">
            <a class="link" href="${item.link}">
                <img class="preview" src="${item.preview}" alt="">
                <div class="gift_text">
                    <h3 class="title">${item.title}</h3>
                                </a>
                                <p class="price">${item.price}원<span class="weight"><br>(100g당 판매가 : ${item.weight}원)</span></p>
                </div>
    </div>`;
});
