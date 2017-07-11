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
      let $node = $(`<td class="node node-${j} north-wall east-wall south-wall west-wall"></td>`);
      node.$el = $node; // bind this DOM element to the abstract `Node`
      $row.append($node);
    });
  });
}

Maze.prototype.generateMaze = function () {
  let totalNodeCount = this.matrix.height * this.matrix.width;
  let currentNode = this.startNode = this.matrix.getRandomNode();
  this.startNode.$el.addClass('start-node');
  let path = new Array(currentNode);
  let visitedCount = 1; // before looping, set start point

  while (visitedCount < totalNodeCount) { // until we've checked each point
    let neighborsToCheck = [];  // after validation, these nodes will be checked
    for (let key in currentNode.neighbors) {
      if (currentNode.neighbors[key] && !currentNode.neighbors[key].wasChecked) {
        neighborsToCheck.push(currentNode.neighbors[key]);
      }
    }
    console.log('neighborsToCheck', neighborsToCheck)
    if (neighborsToCheck.length > 0) {  // if we have neighbors to check
      let nextNode = neighborsToCheck[rand(neighborsToCheck.length)];

      // remove walls between two
      let relationship = this.matrix.getRelationship(currentNode, nextNode);
      if (relationship === 'north') {
        currentNode.walls.north = false;
        currentNode.$el.removeClass('north-wall');
        nextNode.walls.south = false;
        nextNode.$el.removeClass('south-wall');
      } else if (relationship === 'east') {
        currentNode.walls.east = false;
        currentNode.$el.removeClass('east-wall');
        nextNode.walls.west = false;
        nextNode.$el.removeClass('west-wall');
      } else if (relationship === 'south') {
        currentNode.walls.south = false;
        currentNode.$el.removeClass('south-wall');
        nextNode.walls.north = false;
        nextNode.$el.removeClass('north-wall');
      } else if (relationship === 'west') {
        currentNode.walls.west = false;
        currentNode.$el.removeClass('west-wall');
        nextNode.walls.east = false;
        nextNode.$el.removeClass('east-wall');
      } else {
        throw new Error('Huh?!', relationship);
      }
      // mark the neighbor as visited & set it as current cell
      nextNode.wasChecked = true;
      visitedCount++;
      currentNode = nextNode;
      path.push(currentNode);
    } else {
      currentNode = path.pop();
      if (!currentNode) throw new Error('huh?!', currentNode);
    }
  }
}
