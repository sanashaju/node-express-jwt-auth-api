import Joi from "joi";

export const registerValidation = Joi.object({
  username: Joi.string()
    .pattern(/^[A-Za-z]+(\s[A-Za-z]+)*$/)
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters long",
      "string.pattern.base":
        "Username can only contain letters and spaces (e.g., 'John Doe')",
    }),

  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
  }),

  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    )
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must include at least one uppercase, one lowercase, one number, one special character, and be at least 6 characters long",
    }),

  // role is OPTIONAL, but only accepts specific values when provided
  role: Joi.string()
    .valid("admin", "user")
    .optional(),

  age: Joi.number().min(18).max(120).optional().messages({
    "number.base": "Age must be a number",
    "number.min": "Age must be at least 18",
    "number.max": "Age cannot exceed 120",
  }),
});
