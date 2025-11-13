import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    const dbName = process.env.DATABASE;

    if (!mongoUri) throw new Error("MONGO_URI not defined in .env");

    const conn = await mongoose.connect(mongoUri, {
      dbName, 
    });

  
    console.log("✅ MongoDB Connection Successful");
    console.log(`📦 Database: ${conn.connection.name}`);
    
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;