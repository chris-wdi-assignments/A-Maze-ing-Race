const Maze = function (opt) {
  this.totalCells = this.width * this.height;
  this.$maze = opt.$maze;  // keep reference to DOM element
  this.matrix = new Matrix(opt.width, opt.height);
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

Maze.prototype.generateMaze = function () {
  let totalNodeCount = matrix.height * matrix.width;
  let visitedCount = 0;
  let currentNode = matrix.getRandomNode();
//  let currentNode = { // start at a random point, generates better variety
//    'row': rand(matrix.height),
//    'col': rand(width.width)
//  };
  let path = [];
  while (visitedCount < totalNodeCount) { // until we've checked each point
    let arr = currentNode.neighbors;
    path.push(currentNode);  // array series of nodes visited


    // change this, so it doesn't break
    visitedCount++;
  }
}
