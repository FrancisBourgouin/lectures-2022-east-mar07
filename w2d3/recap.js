// WTH ?

// - Callbacks (big ones)
// - HoF vs Callbacks
// - First class
// - Async return values
// - Recursion
// - Client vs Server

// Client : Wants info

// Server : Gives info / Provider / Sends / Receives

// MitM => Apple Store

// iPhone => Evil Me AppleStore => Internet

// Callbacks
// Async Callbacks

// setTimeout(() => {
//   console.log("Wiggle wiggle");
// }, 1000);
// setTimeout(() => {
//   console.log("Yeah wiggle");
// }, 1000);

// Event loop

// Event Emitters and Event Listeners (.on)

// HoF => Needs a callback to work, or returns a function definition

let secretNumber = 0;

setTimeout(() => {
  console.log(secretNumber);
}, 1100);

setTimeout(() => {
  secretNumber = 5;
}, 1000);

setTimeout(() => {
  secretNumber = 5555;
}, 100);

setTimeout(() => {
  secretNumber = 50;
}, 0);

console.log(secretNumber);

// Set secretNumber to 0
// Set a timer for 1000ms to do the callback to change secretNumber to 5
// Set a timer for 100ms to do the callback to change secretNumber to 5555
// Set a timer for 0ms to do the callback to change secretNumber to 50
// We log the value of secretNumber 0

// -- END OF SYNCHRONOUS CONTENT --

// Then we change to 50
// Then we change to 5555
// Then we change to 5

// Philly Cheesesteak
