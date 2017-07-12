![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# A-Maze-ing Race

A live version is available [here](https://chris-wdi-assignments.github.io/a-maze-ing-race).

### User Story

1. Game preferences are determined, either by default or user interaction.
2. User clicks "Start Game" button. Maze is procedurally generated according to preferences. Maze is a rectangular grid of both open cells and walls. Maze has start and end points.
3. A timer is started, counting down time limit from preferences. When the timer reaches 0, the game is over.
4. User presses the W, A, S, and D keys to move their avatar. If the cell in the desired direction is a wall, nothing happens. Else, avatar moves one cell over.
5. Each time user successfully moves avatar, the game checks if the user has reached the maze endpoint. If they have reached the endpoint, they win. Else, return to step 3.
Add Comment Collapse

### Reference

I would not have been able to write the maze generation algorithm without
[this excellent article by David Stromberg](http://dstromberg.com/2013/07/tutorial-random-maze-generation-algorithm-in-javascript/).
His implementation utilizes a depth-first search algorithm, meaning every
maze has a solution and there are no loops (i.e. any point in the maze is
reachable from any other point).

Though the algorithm is based on his code, the implementation is my own:

1. The maze is made up of a rectangular grid of nodes.
2. Each node is bound to a `td` element on a `table` element.
3. Each node is linked to four adjacent nodes (above, below, to the left and right) other than edge cases (which are linked to three nodes) and corners (linked to two other nodes).
4. Walls are drawn on the browser with `td` borders.
5. Maze generation is done through node traversal in a recursive function. A delay is applied between successive calls of the function to provide an animation of the maze generation process.

### Project Feedback

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and frequent commit schedule as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors score each category above on the following scale:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete (not attempted)._
    **1** | _Does not meet expectations. Work on this._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, wow!_

 You will receive a total score that is a composite of these scores. This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones for each category__ above, which can help you identify where to focus your efforts for the next project!
