const firstnames = require("../../lists/firstnames.json");
const lastnames = require("../../lists/lastnames.json");

module.exports.getRandomFirstname = () => {
  const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
  return firstname;
};
module.exports.getRandomLastname = () => {
  const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
  return lastname;
};
module.exports.getRandomName = () => {
  const name =
    firstnames[Math.floor(Math.random() * firstnames.length)] +
    " " +
    lastnames[Math.floor(Math.random() * lastnames.length)];
  return name;
};
