import { PhoneFormat as Format, PhoneFormats as Formats } from "./types";

export const PHONE_FORMATS: Formats = {
  fr: {
    format: [2, 2, 2, 2],
    separator: ".",
    base: ["03.", "09.", "06.", "07."],
  },
  uk: {
    format: [2, 4, 4],
    separator: " ",
    base: ["0"],
  },
  us: {
    format: [3, 3, 4],
    separator: "-",
    base: [""],
  },
};

export const EMAIL_PROVIDERS: string[] = [
  "gmail",
  "yahoo",
  "outlook",
  "gmx",
  "aol",
  "yandex",
  "icloud",
  "proton",
];
