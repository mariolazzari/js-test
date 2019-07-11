const Poller = require("./Poller");

// Set 1s timeout between polls
// note: this is previous request + processing time + timeout
let poller = new Poller(1000);

// Wait till the timeout sent our event to the EventEmitter
poller.onPoll(() => {
  console.log("triggered poller");
  poller.poll(); // Go for the next poll
});

// Initial start
poller.poll();

let poller2 = new Poller(500);
poller2.onPoll(() => {
  console.log("triggered poller 2");
  poller2.poll(); // Go for the next poll
});

// Initial start
poller2.poll();
