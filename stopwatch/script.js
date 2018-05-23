let timeLastStarted = null;
let elapsed = 0;

function startStop() {
  // checks if timer is not currently running
  if (timeLastStarted === null) {
    // change button text
    $("#start-stop").html('Stop');
    
    timeLastStarted = Date.now();

  } else {
    $("#start-stop").html('Start');

    timeLastStarted = null;
  }
}