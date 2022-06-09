import styles from "./buttonSubmit.module.scss";
interface BtnSubInt {
  text: string;
}

export const ButtonSubmit = ({ text }: BtnSubInt): JSX.Element => {
  return (
    <button type="button" className={styles.button}>
      {text}
    </button>
  );
};
