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
      row.push({
        node: new Node(),
        wasChecked: false
      });
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
  this.totalCells = this.width * this.height;
  this.$maze = opt.$maze;  // keep reference to DOM element
  this.matrix = new Matrix(this.width, this.height);
  this.createMazeDOM();  // setup DOM
  this.generateMaze();  // randomly generate walls
};

Maze.prototype.createMazeDOM = function () {
  this.$maze.empty(); // clear it out before drawing new
  const that = this;
  this.matrix.getRows().forEach(function (row, i) {  // each is array of objects
    let $row = $(`<tr class="row row-${i}"></tr>`); // create div to hold row
    that.$maze.append($row);  // append to the maze
    row.forEach(function (obj, j) { // obj contains a node
      let $node = $(`<td class="node node-${j}"></td>`);
      obj.node.$el = $node; // bind this DOM element to the abstract `Node`
      $row.append($node);
    });
  });
}

const rand = (x) => Math.floor(Math.random() * x); // get random int [0,x)

Maze.prototype.generateMaze = function () {
  let totalNodeCount = this.height * this.width;
  let visitedCount = 0;
  let currentNode = { // start at a random point, generates better variety
    'row': rand(this.height),
    'col': rand(this.width)
  };
  let path = [];
  while (visitedCount < totalNodeCount) { // until we've checked each point
    path.push(currentNode);  // array series of nodes visited

    // change this, so it doesn't break
    visitedCount++;
  }
}
