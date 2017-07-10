let config = {
  width: 10,
  height: 10
}

$(function () {
  const $maze = $('.maze');
  for (let i = 0; i < config.width; i++) {
    let $row = $(`<div class="row row-${i}"></div>`);
    $maze.append($row);
    for (let j = 0; j < config.height; j++) {
      let $block = $(`<div class="block block-${j}"></div>`);
      $row.append($block);
      console.log('yoloDawg');
    }
  }
});
