import mongoose from "mongoose";

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connected to database successfully");
    });
    connection.on("error", (err) => {
      console.log("something went wrong!", err);
      process.exit();
    });
  } catch (err) {
    console.log("something went wrong!", err);
  }
}
