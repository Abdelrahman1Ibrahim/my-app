export interface IRegisterProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface IInput {
  type: string;
  name: "username" | "email" | "password" | "confirmPassword";
  placeholder: string;
  errorMessage?: string;
  autoComplete?: string;
}

// Separate interface for login inputs
export interface ILoginInput {
  type: string;
  name: "email" | "password";
  placeholder: string;
  errorMessage?: string;
  autoComplete?: string;
}
