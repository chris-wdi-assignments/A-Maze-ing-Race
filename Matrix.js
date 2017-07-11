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
