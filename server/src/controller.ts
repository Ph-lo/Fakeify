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
const phones = require("./models/phones");
const emails = require("./models/emails");
const names = require("./models/names");

// ######################################################################################
// ##############################         NAMES         #################################
// ######################################################################################

exports.randomFirstname = (req: any, res: any, next: any) => {
  const firstname = names.getRandomFirstname();
  res.status(200).json(firstname);
};

exports.randomLastname = (req: any, res: any, next: any) => {
  const lastname = names.getRandomLastname();
  res.status(200).json(lastname);
};

exports.randomName = (req: any, res: any, next: any) => {
  const name = names.getRandomName();
  res.status(200).json(name);
};

// ######################################################################################
// ##############################         PHONES         ################################
// ######################################################################################

exports.randomPhoneNumber = (req: any, res: any, next: any) => {
  const phoneNbr = phones.getRandomPhoneNumber(req?.body?.format);
  res.status(200).json(phoneNbr);
};

// ######################################################################################
// ##############################         EMAILS         ################################
// ######################################################################################

exports.randomEmail = (req: any, res: any, next: any) => {
  const email = emails.getRandomEmail(req?.body?.name);
  res.status(200).json(email);
};
