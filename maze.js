const Node = function () {
  this.walls = {
    north: false,
    east: false,
    south: false,
    west: false
  };
}

const Maze = function (opt) {
  this.width = opt.width;
  this.height = opt.height;
  this.grid = []; // 2d matrix
  for (let i = 0; i < this.height; i++) { // first do rows, to match DOM
    let row = [];
    for (let j = 0; j < this.width; j++) {
      row.push([].push(new Node()));
    }
    this.grid.push(col);
  }
};

Maze.prototype.get()

Maze.prototype.initialize = function () {
  const $maze = $('.maze');
  for (let i = 0; i < this.height; i++) {
    let $row = $(`<div class="row row-${i}"></div>`);
    $maze.append($row);
    for (let j = 0; j < this.width; j++) {
      let $block = $(`<div class="block block-${j} empty"></div>`);
      $row.append($block);
    }
  }
}
