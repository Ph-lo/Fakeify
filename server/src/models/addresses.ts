const fullAddresses = require("../../lists/fullAddresses.json");
const countries = require("../../lists/countries.json");

const randomFullAddress = () => {
  const address = fullAddresses.addresses[Math.floor(Math.random() * fullAddresses.addresses.length)];
  return address;
};

module.exports.getRandomFullAddress = () => {
  const address = randomFullAddress();
  return address;
};
module.exports.getRandomCountry = () => {
  const country = countries[Math.floor(Math.random() * countries.length)];
  return country;
};
module.exports.getRandomPostcode = () => {
  const postcode = randomFullAddress().postalCode;
  return postcode;
};
module.exports.getRandomStreet = () => {
    const street = randomFullAddress().address1;
    return street;
};
