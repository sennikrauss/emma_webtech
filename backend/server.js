/**
 * Schritt 1
 * zusätzliche Module installieren: npm install express mysql body-parser --save
 * Module express, mysql und body-parser konfigurieren für backend
 *
 * Schritt 6
 * Routes (artikel.routes.js) einlesen über require
 * Test
 * @type {e | (() => Express)}
 */
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// enable cors for all requests
app.use(cors());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello Tante Emma!" });
});

require("./app/routes/routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
