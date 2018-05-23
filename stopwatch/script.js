let timeLastStarted = null;
let elapsed = 0;

function startStop() {
  // checks if timer is not currently running
  if (timeLastStarted === null) {
    // change button text
    $("#start-stop").html('Stop');
    // gets the time when start button was pressed
    timeLastStarted = Date.now();

  } else {
    // change button text
    $("#start-stop").html('Start');

    // takes the end time and subtracts the begining time to get the time elapsed
    elapsed += (Date.now() - timeLastStarted) / 1000 // to convert to seconds

    // resets timer to be used again later
    timeLastStarted = null;

  }
}

function ticker() {
  
}