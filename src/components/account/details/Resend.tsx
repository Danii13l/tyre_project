import { FC, useState, useEffect } from "react";

import styles from "../account.module.scss";

const padTime = (time: number) => time.toString().padStart(2, "0");

export const Resend: FC = (): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(2 * 60);

  let minutes = padTime(Math.floor(timeLeft / 60));
  let seconds = padTime(timeLeft - +minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((state) => (state >= 1 ? state - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.resend}>
      <button
        disabled={timeLeft > 0}
        onClick={() => alert("not disabled")}
        type="button"
      >
        Отправить еще раз
      </button>

      <p>
        Получить СМС повторно можно через
        <span>
          {minutes}:{seconds}
        </span>
        сек
      </p>
    </div>
  );
};
