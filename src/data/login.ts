import { ILoginInput } from "../types/index";

const loginData: ILoginInput[] = [
  {
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    autoComplete: "email"
  },
  {
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    autoComplete: "password"
  }
];

export default loginData;
