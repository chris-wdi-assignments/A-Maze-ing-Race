let config = {
  width: 5,
  height: 5
}

$(function () {
  console.log('DOM Loaded.');
  config.$maze = $('.maze');
  let maze = new Maze(config);
});
