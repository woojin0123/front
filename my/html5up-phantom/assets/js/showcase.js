const galleryGrid = document.querySelector(".gallery-grid");

img_list.forEach((item) => {
  galleryGrid.innerHTML += `
								<div class="gallery-item">
									<div class="image-box">
										<img src="${item.link}"
											alt="사진">
										<div class="gallery-text">
											<p>
												&lt;${item.type}&gt;<br>
												<span>${item.artist}<br>[${item.album}]</span></div>
											</p>
									</div>
								</div>
  `;
});
