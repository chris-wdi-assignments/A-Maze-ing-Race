const Matrix = function (width, height) {
  this.width = width;
  this.height = height;
  this.grid = []; // 2d matrix
  this.buildMatrix(); // build matrix
  this.allNodesSerialized = []; // all nodes in matrix will be pushed into one array
                                // remember objects are stored in vars as references
  this.grid.forEach(function (row) {
    row.forEach(function (node) {
      this.allNodesSerialized.push(node);
    });
  }); // .allNodesSerialized should now be populated
  return arr;
  this.populateNeighbors(); // link each node to its neighbors
}

Matrix.prototype.getRows = function () {
  return this.grid; // array of row arrays
}

Matrix.prototype.buildMatrix = function () {
  for (let i = 0; i < this.height; i++) { // first do rows, to match DOM
    let row = [];
    for (let j = 0; j < this.width; j++) {
      row.push({
        node: new Node(i, j),
        wasChecked: false
      });
    }
    this.grid.push(row);
  }
}

Matrix.prototype.populateNeighbors = function () {
  this.allNodesSerialized.forEach(function (node) { // made this arr so we
                                                    // could do this!
    // set node.neighbors.north
    let north = this.grid[node.row - 1][node.col];  // is undefined if top row
    node.neighbors.north = north || null;
    // set east
    let east = this.grid[node.row][node.col + 1];
    node.neighbors.east = east || null;
    // set south
    let south = this.grid[node.row + 1][node.col];
    node.neighbors.south = south || null;
    // set west
    let west = this.grid[node.row][node.col - 1];
    node.neighbors.west = west || null;
  });
}

// function rand(max) {}; defined in globals.js

Matrix.prototype.getRandomNode = function () {
  return this.grid[rand(this.height)][rand(this.width)];
}
