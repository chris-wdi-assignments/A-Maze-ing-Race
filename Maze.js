const Maze = function (opt) {
  this.totalCells = this.width * this.height;
  this.$maze = opt.$maze;  // keep reference to DOM element
  this.matrix = new Matrix(opt.width, opt.height);
  this.createMazeDOM();  // setup DOM
  this.startNode = null; // pointer to first node
  this.generateMaze();  // randomly generate walls
};

Maze.prototype.createMazeDOM = function () {
  this.$maze.empty(); // clear it out before drawing new
  const that = this;
  this.matrix.getRows().forEach(function (row, i) {  // each is array of objects
    let $row = $(`<tr class="row row-${i}"></tr>`); // create div to hold row
    that.$maze.append($row);  // append to the maze
    row.forEach(function (node, j) {
      let $node = $(`<td class="node node-${j}"></td>`);
      node.$el = $node; // bind this DOM element to the abstract `Node`
      $row.append($node);
    });
  });
}

Maze.prototype.generateMaze = function () {
  let totalNodeCount = this.matrix.height * this.matrix.width;
  let currentNode = this.startNode = this.matrix.getRandomNode();
  let path = [].push(currentNode);
  let visitedCount = 1; // before looping, set start point

  while (visitedCount < totalNodeCount) { // until we've checked each point
    let neighborsToCheck = [];  // after validation, these nodes will be checked
    if (!currentNode.wasChecked) {
      for (let key in currentNode.neighbors) {
        if (currentNode.neighbors) neighborsToCheck.push(currentNode.neighbors[key]);
      }
    }
    if (neighborsToCheck.length > 0) {  // if we have neighbors to check
      let nextNode = neighborsToCheck[rand(neighborsToCheck.length)];

      // remove walls between two
      let relationship = this.matrix.findRelationship(currentNode, nextNode);
    } else {
      currentNode = path.pop();
    }
    path.push(currentNode);  // array series of nodes visited

    // change this, so it doesn't break
    visitedCount++;
  }
}
