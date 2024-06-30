import app from "./src/app.js";
import { DB_URL, PORT } from "./src/config.js";
import mongoose from "mongoose";

try {
  await mongoose.connect(DB_URL);
  console.log("Database connection successful");
} catch (error) {
  console.log("Database crushed. error: ", error);
  process.exit(1);
}


app.listen(PORT, (error) => {
  if (error) {
    console.log("Server crushed. error: ", error);
    process.exit(1);
  }
  console.log("Server is running on port: ", PORT);
});
