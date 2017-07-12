let config = {
  width: 35,
  height: 35
}

const keycodes = {
  r: 114,
  space: 32,
  w: 119,
  a: 97,
  s: 115,
  d: 100
}

let keybindings = { // make these user configurable?
  north: keycodes.w,
  west: keycodes.a,
  south: keycodes.s,
  east: keycodes.d,
  reset: keycodes.r
}

let maze = null;  // global, not set until hit r

const readKeyboard = function (maze) {
  $(document).on('keypress', function (e) {
    let press = e.which;
    if (press === keybindings.reset) {
      maze = new Maze(config);  // create a new Maze on r
    }
    if (maze) { // if no maze, we don't care
      ['north', 'east', 'south', 'west'].forEach(function (direction) {
        if (press === keybindings[direction] && !maze.avatar.walls[direction]) {
          // check if we moved in this direction and no wall there
          // now move in `direction` by node traversal
          maze.avatar.$el.removeClass('avatar');
          maze.avatar = maze.avatar.neighbors[direction];
          maze.avatar.$el.addClass('avatar');
        }
      })
    }
  });
};

$(function () {
  console.log('DOM Loaded.');
  config.$maze = $('.maze');
  readKeyboard();
});
