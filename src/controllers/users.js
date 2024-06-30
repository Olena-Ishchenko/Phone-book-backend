import { findUserByEmail, createUser } from "../services/users.js";
import httpError from "../utils/httpError.js";

export const signupController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);
  if (user) {
    throw httpError(409, "Email in use");
  }
  const newUser = await createUser(req.body);

  res.status(201).json({
    user: { name: newUser.name, email: newUser.email },
    token: newUser.token,
  });
};
