const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((mongooseInstance) => {
        console.log("Connected to Database");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error(`Error connecting to DB: ${err}`);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = connectDB;
