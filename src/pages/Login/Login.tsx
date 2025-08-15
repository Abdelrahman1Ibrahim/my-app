// data
import loginData from "../../data/login";

//types
import { ILoginProps } from "../../types/index";

// hooks
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

// validation
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin as schema } from "../../utils/validation/yup";

// components
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

// styles
import styles from "../../sharedStyles/auth.module.css";

// features
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from "../../api/axios";

// context
import { AuthContext } from "../../store/AuthProvider";
import { ThemeContext } from "../../store/ThemeProvider";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isLoading }
  } = useForm<ILoginProps>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  const onSubmit: SubmitHandler<ILoginProps> = async (data) => {
    const { email, password } = data;

    try {
      const response = await toast.promise(
        axiosInstance.post("/auth/local", {
          identifier: email, // Strapi uses 'identifier' for login
          password
        }),
        {
          pending: {
            render: "Logging in...",
            autoClose: false
          },
          success: {
            render: "Logged in successfully!",
            autoClose: 2000
          }
        }
      );

      // Handle successful login
      if (response.data?.jwt) {
        const token = response.data.jwt;
        login(token);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error: any) {
      if (error.response?.status === 401) {
        toast.error("Invalid email or password", { autoClose: 2000 });
      } else {
        toast.error("An error occurred during login", { autoClose: 2000 });
      }
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h1>Login</h1>
        {loginData.map((input) => (
          <Input
            key={input.name}
            {...input}
            {...register(input.name)}
            errorMessage={errors[input.name]?.message}
          />
        ))}
        <Button
          type="submit"
          state="primary"
          disabled={isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </main>
  );
}
