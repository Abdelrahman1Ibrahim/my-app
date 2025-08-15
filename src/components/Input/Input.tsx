import { IInput } from "../../types/index";
import styles from "./input.module.css";
interface InputProps extends IInput {
  ref?: React.Ref<HTMLInputElement>;
}

export default function Input({ errorMessage, ...props }: InputProps) {
  // console.log(props);
  return (
    <p>
      <input
        {...props}
        className={`${styles.input} ${errorMessage && "error"}`}
      />
      {(errorMessage !== "" || errorMessage !== undefined) && (
        <span className={styles.error}>{errorMessage}</span>
      )}
    </p>
  );
}
