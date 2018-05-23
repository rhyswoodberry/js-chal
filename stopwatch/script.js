let timeLastStarted = null;
let elapsed = 0;

function startStop() {
  // checks if timer is not currently running
  if (timeLastStarted === null) {
    // change button text
    $("#start-stop").html('Stop');
    // gets the time when start button was pressed
    timeLastStarted = Date.now();
    // start the html ticker at a set interval (100 miliseconds)
    setInterval(ticker, 10);

  } else {
    // change button text
    $("#start-stop").html('Start');

    // takes the current time and subtracts the begining time to get the time elapsed
    elapsed += (Date.now() - timeLastStarted) / 1000 // to convert to seconds

    // resets timer to be used again later
    timeLastStarted = null;

  }
}

function ticker() {
  let fullElapsed = elapsed;
  // to keep updating the display timer
  if (timeLastStarted !== null) {
    fullElapsed += (Date.now() - timeLastStarted) / 1000
  }
  // put time in html and fix it to 2 decimal places
  $("#timer").html(fullElapsed.toFixed(2));
}