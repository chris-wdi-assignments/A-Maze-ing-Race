let config = {
  width: 10,
  height: 5
}

const keycodes = {
  r: 114,
  space: 32,
  w: 119,
  a: 97,
  s: 115,
  d: 100
}

let keybindings = {
  north: keycodes.w,
  west: keycodes.a,
  south: keycodes.s,
  east: keycodes.d
}

const readKeyboard = function () {
  $(document).on('keypress', function (e) {
    if (e.which === keycodes.r) {
      maze = new Maze(config);  // create a new Maze on r
    }
  });
};

$(function () {
  console.log('DOM Loaded.');
  config.$maze = $('.maze');
  let maze = null;  // onLoad, no maze
  readKeyboard();
});
