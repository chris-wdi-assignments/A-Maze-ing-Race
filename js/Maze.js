const Maze = function (opt) {
  this.delay = opt.delay; // for animation
  this.totalCells = this.width * this.height;
  this.$maze = opt.$maze;  // keep reference to DOM element
  this.matrix = new Matrix(opt.width, opt.height);
  this.createMazeDOM();  // setup DOM
  this.avatar = null; // pointer to avatar
  this.end = null;  // pointer to the goal
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
  let currentNode = this.avatar = this.matrix.getRandomNode();
  this.avatar.$el.addClass('avatar active');
  let path = new Array(currentNode);
  let visitedCount = 1; // before looping, set start point

  let mazeStep = () => { // recursive function, arrow to preserve `this`
    if (visitedCount >= totalNodeCount) { // maze is finished, clean up
      currentNode.$el.removeClass('active');
      currentNode.$el.addClass('end-node');
      this.end = currentNode;
      return; // exit out of recursive functions
    }
    let neighborsToCheck = [];  // after validation, these nodes will be checked
    for (let key in currentNode.neighbors) {
      if (currentNode.neighbors[key] && !currentNode.neighbors[key].wasChecked) {
        neighborsToCheck.push(currentNode.neighbors[key]);
      }
    }
    if (neighborsToCheck.length > 0) {  // if we have neighbors to check
      let nextNode = neighborsToCheck[rand(neighborsToCheck.length)];

      // remove walls between two
      let relationship = this.matrix.getRelationship(currentNode, nextNode);
      let directions = ['north', 'east', 'south', 'west'];
      for (let i = 0; i < directions.length; i++) {
        if (relationship === directions[i]) {
          currentNode.walls[directions[i]] = false;
          currentNode.$el.removeClass(`${directions[i]}-wall`);
          nextNode.walls[directions[(i + 2) % 4]] = false;
          nextNode.$el.removeClass(`${directions[(i + 2) % 4]}-wall`);
        }
      }

      // mark the neighbor as visited & set it as current cell
      nextNode.wasChecked = true;
      visitedCount++;
      currentNode.$el.removeClass('active');
      currentNode = nextNode;
      currentNode.$el.addClass('active');
      path.push(currentNode);
    } else {
      currentNode.$el.removeClass('active');
      currentNode = path.pop();
      currentNode.$el.addClass('active');
      if (!currentNode) throw new Error('huh?!', currentNode);
    }
    setTimeout(mazeStep, this.delay); // recursively call itself
  };
  mazeStep();
}

