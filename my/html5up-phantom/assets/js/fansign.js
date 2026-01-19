const galleryGrid = document.querySelector(".gallery-grid");

img_list.forEach((item) => {
  galleryGrid.innerHTML += `
								<div class="gallery-item">
									<div class="image-box">
										<img src="${item.link}
											alt="사진">
										<div class="gallery-text">
											<p>
												${item.artist}<br>[${item.album}]<br>
												<span>대면 ${item.offline}회<br>영통 ${item.online}회</span></div>
											</p>
									</div>
								</div>
  `;
});
