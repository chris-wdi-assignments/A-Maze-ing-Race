const presets = {
  easy: {
    width: 8,
    height: 8,
    delay: 18
  },
  medium: {
    width: 16,
    height: 16,
    delay: 4
  },
  difficult: {
    width: 32,
    height: 32,
    delay: 1
  },
  ridiculous: {
    width: 40,
    height: 80,
    delay: 0
  }
}

const keycodes = {
  r: 82,
  space: 32,
  w: 87,
  a: 65,
  s: 83,
  d: 68
}

let keybindings = { // make these user configurable?
  north: keycodes.w,
  west: keycodes.a,
  south: keycodes.s,
  east: keycodes.d,
  reset: keycodes.r
}

let maze = null;  // global, not set until hit r
let isPlaying = false;  // also global

const readKeyboard = function (maze) {
  $(document).on('keydown', function (e) {
    let press = e.which;
    if (press === keybindings.reset) {
      let difficulty = $('input:radio:checked').val().toLowerCase();
      let options = presets[difficulty];
      options.$maze = $('.maze');
      options.$maze.removeClass('easy medium difficult ridiculous hidden').addClass(difficulty);
      isPlaying = true; // start game
      $('.victory-message').addClass('hidden');
      maze = new Maze(presets[difficulty]);  // create a new Maze on r
    }
    if (maze && isPlaying) { // if no maze, we don't care
      ['north', 'east', 'south', 'west'].forEach(function (direction) {
        if (press === keybindings[direction] && !maze.avatar.walls[direction]) {
          // check if we moved in this direction and no wall there
          // now move in `direction` by node traversal
          maze.avatar.$el.removeClass('avatar');
          maze.avatar = maze.avatar.neighbors[direction];
          maze.avatar.$el.addClass('avatar');

          if (maze.avatar === maze.end) { // victory!
            $('.maze').addClass('hidden');
            $('.victory-message').removeClass('hidden');
            isPlaying = false;
          }
        }
      })
    }
  });
};

$(function () {
  console.log('DOM Loaded.');
  readKeyboard();
  $('.btn').on('click', function () {
    $(this).addClass('hidden');
    $('form').removeClass('hidden');
  })
});
