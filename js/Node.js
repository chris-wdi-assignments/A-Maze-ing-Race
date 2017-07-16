const Node = function (row, col) {
  this.row = row; // this is our first coordinate, though not x
  this.col = col; // matrix set up to model DOM, thus y, x
  this.walls = {  // initialize with all walls intact
    north: true,
    east: true,
    south: true,
    west: true
  };
  this.state = {
    wasChecked: false,  // check if we checked here yet during maze gen
    isActive: false
  };
  this.neighbors = {};  // must be initialized by .setNeighbors()
  this.d3Element = null;   // later bind DOM element to this Node
}

Node.prototype.setNeighbors = function (north, east, south, west) {
  this.neighbors = {
    north: north,
    east: east,
    south: south,
    west: west
  };
};
