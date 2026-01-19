const galleryGrid = document.querySelector(".gallery-grid");

img_list.forEach((item) => {
  galleryGrid.innerHTML += `
								<div class="gallery-item">
									<div class="image-box">
										<img src="${item.link}"
											alt="사진">
									</div>
								</div>
  `;
});
