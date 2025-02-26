const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connections/DB");
const userModel = require("./model/UserModel");
const userRoutes = require("./routes/userRoutes");
const urlRoute = require("./routes/URlRoutes");
const testRoute = require("./routes/testRoute");
const path = require("path");

//const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

//connection
connectDB();
//connectURLDB();
//View

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

app.use("/api/user", userRoutes);
app.use("/url/short", urlRoute);
app.use("/test", testRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port :- ${process.env.PORT}`);
});

//comment added for testing
