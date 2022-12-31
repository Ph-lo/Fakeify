export type PhoneFormat = {
  format: number[];
  separator: string;
  base: string[];
};

export interface PhoneFormats {
  fr: PhoneFormat;
  uk: PhoneFormat;
  us: PhoneFormat;
}
