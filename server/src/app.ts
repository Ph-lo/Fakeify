const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./routes.ts");

export const app = express();

app.use((req: any, res: any, next: any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/", routes);
//app.get("/", (req: any, res: any) => res.send("🏠"));

module.exports = app;
