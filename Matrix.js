const Matrix = function (width, height) {
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
  for (let i = 0; i < height; i++) { // first do rows, to match DOM
    let row = [];
    for (let j = 0; j < width; j++) {
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
    //
  });
}
