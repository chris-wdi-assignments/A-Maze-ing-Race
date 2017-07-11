const Node = function () {
  this.walls = {
    north: false,
    east: false,
    south: false,
    west: false
  };
  this.$el = null;
}

const Matrix = function (width, height) {
  this.grid = []; // 2d matrix
  for (let i = 0; i < height; i++) { // first do rows, to match DOM
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push([].push(new Node()));
    }
    this.grid.push(row);
  }
}
Matrix.prototype.getRows = function () {
  return this.grid; // array of row arrays
}

const Maze = function (opt) {
  this.width = opt.width;
  this.height = opt.height;
  this.matrix = new Matrix(this.width, this.height);
  this.$maze = $('.maze');  // keep reference to DOM element
  this.initialize();  // setup DOM
};

Maze.prototype.initialize = function () {
  this.Matrix.getRows().forEach(function (row) {  // each is array of Nodes

  })
  for (let i = 0; i < this.height; i++) {
    let $row = $(`<div class="row row-${i}"></div>`);
    this.$maze.append($row);
    for (let j = 0; j < this.width; j++) {
      let $block = $(`<div class="block block-${j} empty"></div>`);
      $row.append($block);
    }
  }
}
