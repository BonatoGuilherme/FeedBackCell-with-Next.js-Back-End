const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");

const configMiddlewares = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(path());
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "feedbackcell_secret",
      resave: false,
      saveUninitialized: false,
    }),
  );
};

module.exports = configMiddlewares;
