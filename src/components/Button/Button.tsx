import {ReactNode} from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export const Button = ({children, className}: ButtonProps) => {
  return <button className={`${styles.btn} ${className}`}>{children}</button>;
};
