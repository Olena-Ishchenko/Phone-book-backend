import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/user.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/users", router);

app.use((_, res) => {
  res.status(404).json({ message: "This route not found" });
});

app.use((error, req, res, next) => {
  const { message = "Server internal error!", status = 500 } = error;
  res.status(status).json(message);
});

export default app;
