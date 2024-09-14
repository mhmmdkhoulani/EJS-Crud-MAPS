require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const dbConnect = require("./congif/db");
const noteRouter = require("./routes/noteRoute");
const app = express();
dbConnect();
//Add static folder
app.use(express.static("public"));

//Set views
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", "./views");
app.set("layout", "layouts/main");
app.set("view engine", "ejs");

app.use("/", noteRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
