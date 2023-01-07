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
const texts = require("./models/texts");
const dates = require("./models/dates");
const addresses = require("./models/addresses");

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

// ######################################################################################
// ##############################         TEXTS         #################################
// ######################################################################################

exports.randomParagraph = (req: any, res: any, next: any) => {
  const str = texts.getRandomParagraph();
  res.status(200).json(str);
};

exports.randomParagraphs = (req: any, res: any, next: any) => {
  const paragraphs = texts.getRandomParagraphs(req?.body?.nbrOfP);
  res.status(200).json(paragraphs);
};

// ######################################################################################
// ##############################         DATES         #################################
// ######################################################################################

exports.randomDate = (req: any, res: any, next: any) => {
  const date = dates.getRandomDate(req?.body?.format);
  res.status(200).json(date);
}

// ######################################################################################
// ############################         ADDRESSES         ###############################
// ######################################################################################

exports.randomFullAddress = (req: any, res: any, next: any) => {
  const fullAddress = addresses.getRandomFullAddress();
  res.status(200).json(fullAddress);
}

exports.randomPostcode = (req: any, res: any, next: any) => {
  const postcode = addresses.getRandomPostcode();
  res.status(200).json(postcode);
}

exports.randomStreet = (req: any, res: any, next: any) => {
  const street = addresses.getRandomStreet();
  res.status(200).json(street);
}

exports.randomCountry = (req: any, res: any, next: any) => {
  const country = addresses.getRandomCountry();
  res.status(200).json(country);
}

// ######################################################################################
// ###############################         IDS         ##################################
// ######################################################################################

exports.randomStringId = (req: any, res: any, next: any) => {
  const id = texts.getRandomStringId(req?.body?.maxLength);
  res.status(200).json(id);
}

exports.randomId = (req: any, res: any, next: any) => {
  const id = texts.getRandomId(req?.body?.maxLength);
  res.status(200).json(id);
}

// ######################################################################################
// ##############################         MIXED         #################################
// ######################################################################################

const TYPE_TO_FUNCTION = {
  firstname: () => names.getRandomFirstname(),
  lastname: () => names.getRandomLastname(),
  name: () => names.getRandomName(),
  phone: (format: string) => phones.getRandomPhoneNumber(format),
  email: (name?: any) => emails.getRandomEmail(name),
  paragraph: () => texts.getRandomParagraph(),
  paragraphs: (nbr: number) => texts.getRandomParagraphs(nbr),
  date: (format: string) => dates.getRandomDate(format),
  fullAddress: () => addresses.getRandomFullAddress(),
  postcode: () => addresses.getRandomPostcode(),
  street: () => addresses.getRandomStreet(),
  country: () => addresses.getRandomCountry(),
  stringId: (maxLength: number) => texts.getRandomStringId(maxLength),
  id: (maxLength: number) => texts.getRandomId(maxLength)
};

type FUNC = (val?: any) => any;

exports.random = (req: any, res: any, next: any) => {
  //console.log(req?.body);
  let fieldNbr = req?.body?.fieldNbr;
  let fields = [];
  let name = {};

  for (let i = 0; i < fieldNbr; i++) {
    name = {
      firstname: TYPE_TO_FUNCTION["firstname"](),
      lastname: TYPE_TO_FUNCTION["lastname"]()
    };
    
    for (let field of req?.body?.data) {
      //console.log(field)
      let tmpField = {};
      if (field?.type === "email") {
        fields.push({
          name: field?.name,
          //@ts-ignore
          value: TYPE_TO_FUNCTION[field?.type](name)
        })
      } else if (field?.type === "firstname") {
        fields.push({
          name: field?.name,
          //@ts-ignore
          value: name?.firstname
        })
      } else if (field?.type === "lastname") {
        fields.push({
          name: field?.name,
          //@ts-ignore
          value: name?.lastname
        })
      } else if (field?.format) {
        fields.push({
          name: field?.name,
          //@ts-ignore
          value: TYPE_TO_FUNCTION[field?.type](field?.format)
        })
      } else if (field?.maxLength) {
        fields.push({
          name: field?.name,
          //@ts-ignore
          value: TYPE_TO_FUNCTION[field?.type](field?.maxLength)
        })
      } else if (field?.nbrOfP) {
        fields.push({
          name: field?.name,
          //@ts-ignore
          value: TYPE_TO_FUNCTION[field?.type](field?.nbrOfP)
        })
      } else {
        fields.push({
          name: field?.name,
          //@ts-ignore
          value: TYPE_TO_FUNCTION[field?.type]()
        })
      }
      //console.log(TYPE_TO_FUNCTION[field?.type]())
      //fields = {...fields, fi}
    }
  }
  res.status(200).json(fields);
}