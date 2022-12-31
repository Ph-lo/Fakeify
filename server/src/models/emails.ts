import { EMAIL_PROVIDERS } from "../formats";
const randomNames = require("../models/names");

module.exports.getRandomEmail = (name?: {
  firstname: string;
  lastname: string;
}) => {
  let email = "";
  let prefix;

  if (name) {
    prefix = [name?.firstname, name?.lastname];
  } else {
    prefix = [
      randomNames.getRandomFirstname(),
      randomNames.getRandomLastname(),
    ];
  }
  email +=
    prefix
      .splice(Math.floor(Math.random() * 2), 1)
      .toString()
      .toLowerCase() + ".";

  email += `${prefix[0].toString().toLowerCase()}@${
    EMAIL_PROVIDERS[Math.floor(Math.random() * EMAIL_PROVIDERS.length)]
  }.com`;
  return email;
};
