
import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

export default function connectDB() {
  const url = "mongodb://127.0.0.1:27017/pokemon";
 
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (err:any) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}