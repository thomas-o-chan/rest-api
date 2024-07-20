import styles from "./button.module.css";

interface ButtonProps {
  children: JSX.Element | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (event: React.PointerEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
