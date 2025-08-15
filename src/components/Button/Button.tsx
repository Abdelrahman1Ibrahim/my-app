import styles from "./button.module.css";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode | "string";
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  state: "primary" | "secondary";
}

export default function Button({ children, state, ...props }: ButtonProps) {
  const buttonStyle = state;

  return (
    <button className={styles[buttonStyle] } {...props}>
      {children}
    </button>
  );
}
