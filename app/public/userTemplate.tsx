export const userTemplate = [
  {
    name: "id",
    type: { label: "id - string", value: "stringId" },
    maxLength: 11,
  },
  {
    name: "firstname",
    type: { label: "Firstname", value: "firstname" },
  },
  {
    name: "lastname",
    type: { label: "Lastname", value: "lastname" },
  },
  {
    name: "email",
    type: { label: "Email", value: "email" },
  },
  {
    name: "phone",
    type: { label: "Phone number", value: "phone" },
    format: { label: "UK", value: "uk" },
  },
  {
    name: "address",
    type: { label: "Full address", value: "fullAddress" },
  },
  {
    name: "date_of_birth",
    type: { label: "Date", value: "date" },
    format: { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
  },
  {
    name: "short_description",
    type: { label: "Paragraph", value: "paragraph" },
  },
  {
    name: "description",
    type: { label: "Paragraphs", value: "paragraphs" },
    maxLength: 5,
  },
];
