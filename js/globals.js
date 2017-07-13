const rand = (x) => Math.floor(Math.random() * x); // get random int [0,x)

let intervalId = null;  // must be global, we only want one setInterval
      // operation running
