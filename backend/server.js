require("dotenv").config();
const express = require("express"); // importing express
const mongoose = require("mongoose");
const listingsRoutes = require("./routes/listings");

// creating the express app
const app = express();

//Middleware: Runs on every request. Like a bouncer checking names before letting people in
app.use(express.json()); // This middleware works with a post request and checks if there is data or body to the request

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Route or Request handler: These will be unique per request. so each button press will have its own request handler.
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to the app'})
// })

//use the imported listing routes
app.use("/api/listings", listingsRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests and start the server on the port
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port",process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
