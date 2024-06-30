import { config } from "dotenv";

config();

export const { PORT = 3000, DB_URL = "" } = process.env;
