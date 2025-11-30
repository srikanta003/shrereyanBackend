const express = require("express");
const app = express();
const path = require("node:path");
const port = 3000;

// Setting up parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up ejs template
app.set("view engine", "ejs");

// Setting up public static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

// dynamic routing  /profile/:user

app.get("/profile/:username/:age", (req, res) => {
  res.send(` ${req.params.username} age is ${req.params.age}` );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
