const Maze = function (opt) {
  this.delay = opt.delay; // for animation
  this.totalCells = this.width * this.height;
  this.d3Maze = opt.d3Maze;
  this.matrix = new Matrix(opt.width, opt.height);
  this.createMazeDOM();  // setup DOM
  this.avatar = null; // pointer to avatar
  this.firstNode = null;  // point of reference, spatially
  this.end = null;  // pointer to the goal
  this.generateMaze();  // randomly generate walls
};

Maze.prototype.createMazeDOM = function () {
  this.d3Maze.html(''); // empty it out first
  const that = this;
  this.matrix.getRows().forEach(function (row, i) {  // each is array of objects
    let d3Row = that.d3Maze.append('tr').classed('row', true); // create row, append
    row.forEach(function (node, j) {
      let d3Element = d3Row.append('td').classed('node north-wall east-wall south-wall west-wall', true);
      node.d3Element = d3Element; // bind this DOM element to the abstract `Node`
    });
  });
}

Maze.prototype.generateMaze = function () {
  let totalNodeCount = this.matrix.height * this.matrix.width;
  let currentNode = this.avatar = this.matrix.getRandomNode();
  this.avatar.d3Element.classed('avatar active', true);
  let path = new Array(currentNode);
  let visitedCount = 1; // before looping, set start point

  let mazeStep = () => { // recursive function, arrow to preserve `this`
    if (visitedCount >= totalNodeCount) { // this is actually the end
      clearInterval(intervalId);
      currentNode.d3Element.classed('active', false);
      currentNode.d3Element.classed('end-node', true);
      this.end = currentNode;
      return; // exit out of recursive functions
    }
    let neighborsToCheck = [];  // after validation, these nodes will be checked
    for (let key in currentNode.neighbors) {
      if (currentNode.neighbors[key] && !currentNode.neighbors[key].wasChecked) {
        neighborsToCheck.push({
          relationship: key,
          neighbor: currentNode.neighbors[key]
        });
      }
    }
    if (neighborsToCheck.length > 0) {  // if we have neighbors to check
      let temp = neighborsToCheck[rand(neighborsToCheck.length)];
      let nextNode = temp.neighbor;
      let relationship = temp.relationship;

      // remove walls between two
      let directions = ['north', 'east', 'south', 'west'];
      for (let i = 0; i < directions.length; i++) {
        if (relationship === directions[i]) {
          currentNode.walls[directions[i]] = false;
          currentNode.d3Element.classed(`${directions[i]}-wall`, false);
          nextNode.walls[directions[(i + 2) % 4]] = false;
          nextNode.d3Element.classed(`${directions[(i + 2) % 4]}-wall`, false);
        }
      }

      // mark the neighbor as visited & set it as current cell
      nextNode.wasChecked = true;
      visitedCount++;
      lastNode = currentNode;
      currentNode = nextNode;
      path.push(currentNode);
    } else {
      lastNode = currentNode;
      currentNode = path.pop();
      if (!currentNode) throw new Error('huh?!', currentNode);
    }
  };
  //set up dummy so first iteration works
  let lastNode = {
    d3Element: {
      classed: () => null
    }
  };  // used for animation
  // intervalId is global, defined in global.js
  if (intervalId) clearInterval(intervalId);  // clear previous interval if
                                              // exists
  intervalId = setInterval(function () {
    //manage animations
    currentNode.d3Element.classed('active', true);
    lastNode.d3Element.classed('active', false);
    mazeStep();
  }, this.delay)
}
