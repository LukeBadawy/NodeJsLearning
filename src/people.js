const people = ["john", "paul", "Luke", "Callum"];
const peoplesAges = [20, 99, 21, 32];
console.log("People", people);

// You dont need to export an object, it can be any value
// module.exports = people;

module.exports = {
  people,
  peoplesAges,
};
