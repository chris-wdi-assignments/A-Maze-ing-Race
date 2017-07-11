let config = {
  width: 10,
  height: 5
}

$(function () {
  console.log('DOM Loaded.');
  config.$maze = $('.maze');
  let maze = new Maze(config);
});
