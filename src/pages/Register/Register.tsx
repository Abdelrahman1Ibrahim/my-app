// hooks
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

// types
import type { IRegisterProps } from "../../types/index";

// components
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

// validation
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister as schema } from "../../utils/validation/yup";

// data
import { registerInputs } from "../../data/Register";

// styles
import styles from "../../sharedStyles/auth.module.css";

// features
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from "../../api/axios";
import { NavLink } from "react-router";

// context
import { ThemeContext } from "../../store/ThemeProvider";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isLoading }
  } = useForm<IRegisterProps>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const { theme } = useContext(ThemeContext);

  const onSubmit: SubmitHandler<IRegisterProps> = async (data) => {
    const { username, password, email } = data;

    try {
      const response = await toast.promise(
        axiosInstance.post("/auth/local/register", {
          username,
          email,
          password
        }),
        {
          pending: {
            render: "Registering...",
            autoClose: false
          },
          success: {
            render: "Registered successfully!",
            autoClose: 2000
          }
        }
      );

      if (response.status === 200) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        console.log(error);
        const errorMessage =
          error.response.data?.error?.message ||
          error.response.data?.message ||
          "Invalid registration data";
        toast.error(errorMessage, { autoClose: 2000 });
      } else if (error.response?.status === 409) {
        toast.error("User already exists with this email or username", {
          autoClose: 2000
        });
      } else {
        toast.error("Something went wrong", { autoClose: 2000 });
      }
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h1>Register</h1>
        {registerInputs.map((input) => (
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
          Register
        </Button>
        <p className={styles.account}>
          Do you have an account ? <NavLink to="/login">login</NavLink>
        </p>
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
