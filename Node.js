const Node = function (row, col) {
  this.row = row; // this is our first coordinate, though not x
  this.col = col; // matrix set up to model DOM, thus y, x
  this.walls = {
    north: false,
    east: false,
    south: false,
    west: false
  };
  this.wasChecked = false;  // check if we checked here yet during maze gen
  this.neighbors = {};  // must be initialized by .setNeighbors()
  this.$el = null;  // later bind DOM element to this node
}

Node.prototype.setNeighbors = function (north, east, south, west) {
  this.neighbors = {
    north: north,
    east: east,
    south: south,
    west: west
  };
};
