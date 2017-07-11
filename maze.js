const Node = function () {
  this.walls = {
    north: false,
    east: false,
    south: false,
    west: false
  };
  this.$el = null;  // later bind DOM element to this node
}

const Matrix = function (width, height) {
  this.grid = []; // 2d matrix
  for (let i = 0; i < height; i++) { // first do rows, to match DOM
    let row = [];
    for (let j = 0; j < width; j++) {
      row.push(new Node());
    }
    this.grid.push(row);
  }
}
Matrix.prototype.getRows = function () {
  console.log(this.grid);
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
  const that = this;
  this.matrix.getRows().forEach(function (row, i) {  // each is array of Nodes
    let $row = $(`<div class="row row-${i}"></div>`); // create div to hold row
    console.log('Trying to append', $row, 'to', that.$maze);
    that.$maze.append($row);  // append to the maze
    row.forEach(function (node, j) {
      let $node = $(`<div class="node node-${j}"></div>`);
      node.$el = $node; // bind this DOM element to the abstract `Node`
      $row.append($node);
    });
  });
  
  //for (let i = 0; i < this.height; i++) {
  //  let $row = $(`<div class="row row-${i}"></div>`);
  //  this.$maze.append($row);
  //  for (let j = 0; j < this.width; j++) {
  //    let $block = $(`<div class="block block-${j} empty"></div>`);
  //    $row.append($block);
  //  }
  //}
}
