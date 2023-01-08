const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = mongoose.connect(process.env.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{console.log("DataBase Connection successfully")})


module.exports = connection;
