const Maze = function (opt) {
  this.width = opt.width;
  this.height = opt.height;
};

Maze.prototype.initialize = function () {
  const $maze = $('.maze');
  for (let i = 0; i < this.width; i++) {
    let $row = $(`<div class="row row-${i}"></div>`);
    $maze.append($row);
    for (let j = 0; j < this.height; j++) {
      let $block = $(`<div class="block block-${j}"></div>`);
      $row.append($block);
    }
  }
}
