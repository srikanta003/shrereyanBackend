// Express.js framework:
// Introduction to Express.js.
// Setting up a basic express application
// Routing
// Middleware
// Request and response handling
// Error handling
const express = require("express");
const app = express();

app.use((req,res,next) => {
  console.log(`user request ${req.method} on url ${req.url}`)
   next();
}
)

//create  routes

// app.get('/', requestHandler);
app.get("/", function (req, res) {
  res.send(`This is my page`);
});
app.get("/profile", function (req, res,next) {
   // res.send("This is profile page");
   return next(new Error(`Something went wrong`))
});

// Error handler
app.use((err,req,res,next ) => {
   console.log(err.stack);
   res.status(500).send(`Something broke!`)
}
)

app.listen(3000, (err) => {
  if (err) console.log(`something error occurs on running server`);
  console.log(`Server is running on http://locahost${3000}`);
});
