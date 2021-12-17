// global object in node.

// console.log(global);

// This works too, but the global object is always available so does
// not need to be referenced like so.
// global.setTimeout(() => {
//   console.log("I was inside a timeout");
// }, 2000);

setTimeout(() => {
  console.log("I was inside a timeout");
  clearInterval(logInterval);
}, 5000);

const logInterval = setInterval(() => {
  console.log("Interval log");
}, 1000);

// Absolute path of the current directory
console.log(__dirname);

// Absolute path of current directory with file name appended.
console.log(__filename);
