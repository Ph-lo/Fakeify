// exports.modifyThings = (req, res, next) => {
//     const thingObject = req.file ?
//         {
//           ...JSON.parse(req.body.thing),
//           imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
//         }
//       : { ...req.body };
//     Thing.updateOne({ _id: req.params.id }, { ...thingObject, _id: req.params.id })
//         .then(() => res.status(200).json({ message: 'Objet modifié' }))
//         .catch(error => res.status(400).json({ error }));
// };

const firstnames = require("../lists/firstnames.json");
const lastnames = require("../lists/lastnames.json");
const phones = require("./models/phones");

// ######################################################################################
// ##############################         NAMES         #################################
// ######################################################################################

exports.randomFirstname = (req: any, res: any, next: any) => {
  const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
  res.status(200).json(firstname);
};

exports.randomLastname = (req: any, res: any, next: any) => {
  const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
  res.status(200).json(lastname);
};

exports.randomName = (req: any, res: any, next: any) => {
  const name =
    firstnames[Math.floor(Math.random() * firstnames.length)] +
    " " +
    lastnames[Math.floor(Math.random() * lastnames.length)];
  res.status(200).json(name);
};

// ######################################################################################
// ##############################         PHONES         ################################
// ######################################################################################

exports.randomPhoneNumber = (req: any, res: any, next: any) => {
  const phoneNbr = phones.getRandomPhoneNumber(req?.body?.format);
  res.status(200).json(phoneNbr);
};
