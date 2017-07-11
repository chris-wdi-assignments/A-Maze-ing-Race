const Node = function () {
  this.walls = {
    north: false,
    east: false,
    south: false,
    west: false
  };
  this.$el = null;  // later bind DOM element to this node
}
