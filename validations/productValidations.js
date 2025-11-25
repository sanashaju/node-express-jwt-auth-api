import Joi from "joi";

const noOnlySpaces = Joi.string()
  .pattern(/^(?!\s*$).+/) // Reject only spaces
  .messages({
    "string.pattern.base": "Field cannot contain only spaces",
  });

export const createProductValidation = Joi.object({
  title: noOnlySpaces.min(2).max(100).required().messages({
    "string.empty": "Product title is required",
    "string.min": "Product title must be at least 2 characters",
    "string.max": "Product title cannot exceed 100 characters",
    "string.pattern.base": "Product title cannot contain only spaces",
  }),

  author: noOnlySpaces.min(2).max(100).required().messages({
    "string.empty": "Author name is required",
    "string.min": "Author name must be at least 2 characters",
    "string.max": "Author name cannot exceed 100 characters",
    "string.pattern.base": "Author name cannot contain only spaces",
  }),

  price: Joi.number().min(0).required().messages({
    "number.base": "Price must be a valid number",
    "number.min": "Price cannot be negative",
    "any.required": "Price is required",
  }),

  category: noOnlySpaces.optional().messages({
    "string.pattern.base": "Category cannot contain only spaces",
  }),

  publisher: noOnlySpaces.optional().messages({
    "string.pattern.base": "Publisher cannot contain only spaces",
  }),

  isbn: noOnlySpaces.optional().messages({
    "string.pattern.base": "ISBN cannot contain only spaces",
  }),

  stock: Joi.number().min(0).required().messages({
    "number.base": "Stock must be a valid number",
    "number.min": "Stock cannot be negative",
    "any.required": "Stock is required",
  }),
});

export const productUpdateValidation = Joi.object({
  title: noOnlySpaces.min(2).max(100).messages({
    "string.min": "Product title must be at least 2 characters",
    "string.max": "Product title cannot exceed 100 characters",
    "string.pattern.base": "Product title cannot contain only spaces",
  }),

  author: noOnlySpaces.min(2).max(100).messages({
    "string.min": "Author name must be at least 2 characters",
    "string.max": "Author name cannot exceed 100 characters",
    "string.pattern.base": "Author name cannot contain only spaces",
  }),

  price: Joi.number().strict().min(0).messages({
    "number.base": "Price must be a valid number (not a string)",
    "number.min": "Price cannot be negative",
  }),

  category: noOnlySpaces.messages({
    "string.pattern.base": "Category cannot contain only spaces",
  }),

  publisher: noOnlySpaces.messages({
    "string.pattern.base": "Publisher cannot contain only spaces",
  }),

  isbn: noOnlySpaces.messages({
    "string.pattern.base": "ISBN cannot contain only spaces",
  }),

  stock: Joi.number().strict().min(0).messages({
    "number.base": "Stock must be a valid number (not a string)",
    "number.min": "Stock cannot be negative",
  }),
})
  .min(1) // ✅ At least one field is required for update
  .messages({
    "object.min": "At least one field must be provided to update",
  });
