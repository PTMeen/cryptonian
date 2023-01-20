import * as Yup from "yup";

const signupSchema = Yup.object({
  email: Yup.string().required("Email required").email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("Confirm password required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const singinSchema = Yup.object({
  email: Yup.string().required("Email required").email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export { signupSchema, singinSchema };
