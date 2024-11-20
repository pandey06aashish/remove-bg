import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Listen for successful connection events
    mongoose.connection.on("connected", () => {
      console.log(`Database Connected: ${mongoose.connection.host}`);
    });

    // Listen for disconnection events
    mongoose.connection.on("disconnected", () => {
      console.log("Database Disconnected");
    });

    // Attempt connection
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "remove-bg", // Specify the database name
    });
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
