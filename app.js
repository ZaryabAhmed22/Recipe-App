const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
  //res.send("Server up and running");
});

app.post("/", function (req, res) {
  console.log(req.body.dishName);
});

// let dish = "";
//   const apiKey = "e4140295-d7c4-4b7d-ad01-c2457ff0fa93";
//   const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${apiKey}`;

//   https.get(url, function (response) {
//     let jsondata = "";

//     // A chunk of data has been received.
//     response.on("data", (chunk) => {
//       jsondata += chunk;
//     });

//     // The whole response has been received. Print out the result.
//     response.on("end", () => {
//       let recipes = JSON.parse(jsondata).data.recipes;
//       let publisher = recipes[0].publisher;
//       console.log(publisher);

//       res.send(`<h1>Today's pizza dish is by ${publisher}</h1>`);
//     });
//   });

app.listen(3000, function () {
  console.log("Server running at port 3000");
});
