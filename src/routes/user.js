import { Router } from "express";
import { signupSchema } from "../schemas/users.js";
import { validateBody } from "../utils/validateBody.js";
import { signupController } from "../controllers/users.js";
import wrapper from "../utils/wrapper.js";

const router = Router();

router.post("/signup", validateBody(signupSchema), wrapper(signupController));

router.post("/login");

router.post("/logout");

router.get("/current");

export default router;
