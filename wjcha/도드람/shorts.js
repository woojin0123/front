short_list.forEach((vid) => {
  const short = 
`<div class="short">
  ${vid.link}
</div>;`
  $(".short").append(short);
});