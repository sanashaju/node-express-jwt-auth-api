export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: true });

  if (error) {
    // Clean and user-friendly messages
    const errors = error.details.map((detail) => {
      return detail.message.replace(/["]/g, ''); // remove extra quotes
    });

    // If only one error, show as single string; otherwise show list
    return res.status(400).json({
      error: errors.length === 1 ? errors[0] : errors
    });
  }

  next();
};
