const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = mongoose
  .connect(
    "mongodb+srv://dudhaTdarshangmailcom:5Fxt2hOXbK1A86O8@cluster0.nzjaafo.mongodb.net/SocialMedia",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DataBase Connection successfully");
  });

module.exports = connection;
