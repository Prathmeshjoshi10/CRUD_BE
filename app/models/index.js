const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);

module.exports = db;

/* const mongoose = require("mongoose");

const connectionURL = "mongodb://127.0.0.1:27017/CRUD";
// const connectionURL =
// "mongodb+srv://prathmeshj:PajAhj135@cluster0.yomqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//mongoose connection with url
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
  })
  .catch((err) => {
    console.log("Error in connecting to DB---", err);
  })
  .then(console.log("DB Connected"));
 */