import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const findUserByEmail = (email) => User.findOne({ email });

export const updateUserWithToken = (id) => {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET
  );

  return User.findByIdAndUpdate(id, { token });
};

export const createUser = async (userData) => {
  const hashCryptPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({
    ...userData,
    password: hashCryptPassword,
  });
  return updateUserWithToken(user._id);
};
