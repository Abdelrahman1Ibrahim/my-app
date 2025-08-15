import * as yup from "yup";

export const schemaRegister = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .trim()
      .min(5, "Username must be at least 5 characters"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required")
      .trim(),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .trim(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required")
  })
  .required();

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required")
      .trim(),
    password: yup.string().required("Password is required").trim()
  })
  .required();
