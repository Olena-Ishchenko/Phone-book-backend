import httpError from "./httpError.js";

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const error = httpError(400, err.message);
    next(error);
  }
};
