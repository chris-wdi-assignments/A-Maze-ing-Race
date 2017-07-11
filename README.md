![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project 0: The Game

**Read this entire document before writing a line of code.**

### User Story

# User Story for Maze Game

1. Game preferences are determined, either by default or user interaction.
2. User clicks "Start Game" button. Maze is procedurally generated according to preferences. Maze is a rectangular grid of both open cells and walls. Maze has start and end points.
3. A timer is started, counting down time limit from preferences. When the timer reaches 0, the game is over.
4. User presses the W, A, S, and D keys to move their avatar. If the cell in the desired direction is a wall, nothing happens. Else, avatar moves one cell over.
5. Each time user successfully moves avatar, the game checks if the user has reached the maze endpoint. If they have reached the endpoint, they win. Else, return to step 3.
Add Comment Collapse

### Overview

Let's start out with something fun - **a game!**

![](https://media.giphy.com/media/u0vk7qdooz5Cg/giphy.gif)

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with Tic Tac Toe and a Memory game, it's your turn to plan and implement a game from scratch.

**You will be working individually for this project**, but we'll be guiding you as you get started. Show us what you've got!


---

### Timeline

* **Assigned:** Monday, July 10th
* **Due:** Wednesday, July 12th at 9:00AM


---

### Essential Skills

By the time you submit this project, you should focus on leveling up in important skill areas:

* **Terminal**: Practice interacting with the computer and navigating the file-system from the Command Line.
* **Git**: Manage and interact with a git repository to store changes to code.
* **JavaScript and jQuery Fundamentals**: Work with objects and events, while strategically solving problems and resolving errors.
* **HTML and CSS**: Work on HTML structure, CSS styles, and perhaps even animating elements within a browser. Respond to actions your users take and the data they input into the browser.
* **Documentation**: Document your code and your GitHub repository so others understand what you've built.

---

### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Include logic for winning** & **visually display which player won**
* **Include separate HTML, CSS, and JavaScript files**
* Use **native Javascript or jQuery** for **DOM manipulation**
* Be **deployed publicly online**, where the rest of the world can access it (using a github pages project page or bitballoon)
* Use **semantic markup** for HTML and CSS (adhere to best practices)
* Include **custom styling** to convey the state of the game visually (and differentiate your project from any CSS libraries used)
* Demonstrate attention to code quality with a **DRY (Don't Repeat Yourself)** codebase that is **"clean" (well-indented, appropriately commented, organized)** and **readable.** Actually ask somebody else in the class to read your code and see if they can understand it!

---

### Deliverables


* A **working game, built by you**, hosted somewhere on the internet.
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A `readme.md` file** with a short description of the project, a list of which technologies you used for which parts of the app, an explanation of your approach (share some part of the code), and optionally a list of unsolved problems,  screenshots, etc.  See the [example readme](https://github.com/sf-wdi-labs/readme-example).
* A **link to your hosted working game** in your game's Github repo.
* A **link to your hosted working game** in the "my work" section of your personal website.
* A

---

### Getting Started

* **Break the project down into different components** Create user-stories, draw wireframes, and write pseudocode! Spend a significant amount of time on these planning steps so you can debug issues before you get to code.
* **Start simple** Build the simplest possible version of your game first, then add extra features or more complex rules.
* **Use your Development Tools** (debugging, global variables, console.log, etc) to solve problems.
* **Reference notes** in class & ask questions to the instructional team when you need to!
* **Commit often!** Commit *at least* every time to complete a user story. Then you don’t have to be afraid to break something, as you can always go back in time to older version.
* **Consult documentation resources** (MDN, jQuery, etc.) to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** For example, you are encouraged to create temporary elements (buttons, links, etc) that trigger game events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate it until then.

---

### Game Types

#### Racing Game

**We suggest and expect that most of you will build a racing game**. Two or more players should be able to use the keyboard to move their "cars" across the browser window.

<img src="https://media.giphy.com/media/mHChlbqGMndYY/giphy.gif" width="60%">


#### Something Else

If you're comfortable with the technologies we're using and you have a fully-fledged plan, you can build a substantially different game. Definitely only build a game that you are familiar with. Make sure you get your plan approved by an instructor if you want to build a non-racing game.

<details><summary>Click this paragraph to see other potential game ideas.</summary>

##### Trivia
Test your wits & knowledge with whatever-the-heck you care about. The player can guess answers and have the computer validate them!

##### Typing Train
The player types letters that appear one-by-one on the screen. They score points for every correct letter and advance a train (or whatever) across the screen!

##### Blackjack
The player bets money (or points) on guessing which card the computer will deal next. The computer deals randomly.

##### Flash Cards

Create a deck of flash cards that have prompts on one side and answers on the other.  After seeing each answer, a player can choose to either keep the card in the deck for more practice or decide they remember it well and remove it from the deck. Once the player has remembered all cards in the deck, they get a win screen.

##### Battleship

The player can challenge the computer, each taking turns trying to sink the other's ships. The one who sinks the other's ships first wins! The game board should show the player's fleet with hit trackers. It should also show a map of where the player's guesses have hit and missed.


**Hints**
* Start with just one size of ship.  
* Start by building a one-dimensional battleship game.  
* Don't let the player decide where to place their ships, to start.

</details>

---

### Sample projects

* [Chiggen Chase](https://serabakpak.github.io/chiggen-chase/) - a racing game
* [Labyrinth game](https://14budig.github.io/labyrinth-game/) - find the yellow coin and get to the orange exit while avoiding the red Minotaur.
* [Bubble pop game](https://samdarbonne.github.io/sams-racing-game/) - pop the bubbles and try to beat the records.


### Extra Challenge Ideas

These are some ideas that could take your game "above and beyond." **Don't focus on them until you've hit the core requirements.**

* Add **movement through CSS** with hover effects, transitions, or keyframe animations.
* Integrate **Object Oriented Programming** design patterns.
* Keep track of **multiple game rounds** with a win counter.
* Allow **customized players** (name, symbol, color, avatar, etc.).
* Use [`localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to **keep track of game state**, even if the user refreshes the page.
* Add **timers** like a countdown timer ("3, 2, 1, Go!"), track the winning time, or track the best time across multiple rounds.
* **Play against a bot**.
* Integrate with a **3rd party API**: flickr, youtube, spotify, giphy, etc.

---

### Resources

* [How to deploy on github pages!](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(the best reference for all things Javascript, CSS, and HTML)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com/)** project site or **[Bit Balloon](https://www.bitballoon.com/docs)** _(hosting the game)_

---

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
