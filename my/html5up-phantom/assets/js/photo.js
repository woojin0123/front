const productList = document.querySelector(".product_list");
const dslrList = document.querySelector(".dslr_list");
const filmList = document.querySelector(".film_list");
const mdList = document.querySelector(".md_list");
const profileList = document.querySelector(".profile_list");

product_list.forEach((item) => {
  productList.innerHTML += `
    							<div class="gallery-item">
										<img src="${item.link}" alt="사진">
								</div>
  `;
});

dslr_list.forEach((item) => {
 dslrList.innerHTML += `
    							<div class="gallery-item">
										<img src="${item.link}" alt="사진">
								</div>
  `;
});

film_list.forEach((item) => {
  filmList.innerHTML += `
    							<div class="gallery-item">
										<img src="${item.link}" alt="사진">
								</div>
  `;
});

md_list.forEach((item) => {
  mdList.innerHTML += `
    							<div class="gallery-item">
										<img src="${item.link}" alt="사진">
								</div>
  `;
});

profile_list.forEach((item) => {
  profileList.innerHTML += `
    							<div class="gallery-item">
										<img src="${item.link}" alt="사진">
								</div>
  `;
});
