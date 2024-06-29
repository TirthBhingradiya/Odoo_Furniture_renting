const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://vasukotadiya224:ZnbujRS3Vm5sHJSz@cluster0.baqiyze.mongodb.net/odoohackathon?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error in Connecting", err);
  }
}

module.exports = connectDB;
