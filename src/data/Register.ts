import { IInput } from "../types/index";

export const registerInputs: IInput[] = [
  {
    type: "text",
    name: "username",
    placeholder: "Username"
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
    autoComplete: "email"
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    autoComplete: "new-password"
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    autoComplete: "password"
  }
];
