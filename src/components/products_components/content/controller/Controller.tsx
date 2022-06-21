import { FC, useState } from "react";

import Select from "react-select";

import styles from "./controller.module.scss";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Controller: FC = (): JSX.Element => {
  const [view, setView] = useState<number>(0);

  const changeView = (num: number): (() => void) => {
    return () => void setView(num);
  };

  return (
    <div className={styles.controller}>
      <div className={styles.controller_sort_wrapper}>
        <Select
          options={options}
          classNamePrefix="select_second"
          placeholder="Новинки"
        />
        <div className={styles.controller_view}>
          <div
            className={`${styles.controller_view_item} ${
              view === 0 ? styles.active : ""
            }`}
            onClick={changeView(0)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5627 22H14.4377C14.1215 22 13.896 21.7548 13.896 21.5V10.5C13.896 10.2452 14.1215 10 14.4377 10H17.5627C17.8789 10 18.1043 10.2452 18.1043 10.5V21.5C18.1043 21.7548 17.8789 22 17.5627 22ZM11.3127 22H8.18766C7.87146 22 7.646 21.7548 7.646 21.5V10.5C7.646 10.2452 7.87146 10 8.18766 10H11.3127C11.6289 10 11.8543 10.2452 11.8543 10.5V21.5C11.8543 21.7548 11.6289 22 11.3127 22ZM20.146 21.5V10.5C20.146 10.2452 20.3715 10 20.6877 10H23.8127C24.1289 10 24.3543 10.2452 24.3543 10.5V21.5C24.3543 21.7548 24.1289 22 23.8127 22H20.6877C20.3715 22 20.146 21.7548 20.146 21.5Z" />
            </svg>
          </div>
          <div
            className={`${styles.controller_view_item} ${
              view === 1 ? styles.active : ""
            }`}
            onClick={changeView(1)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 17.5H8.5C8.22614 17.5 8 17.2739 8 17V15C8 14.7261 8.22614 14.5 8.5 14.5H10.5C10.7739 14.5 11 14.7261 11 15V17C11 17.2739 10.7739 17.5 10.5 17.5ZM10.5 22.5H8.5C8.22614 22.5 8 22.2739 8 22V20C8 19.7261 8.22614 19.5 8.5 19.5H10.5C10.7739 19.5 11 19.7261 11 20V22C11 22.2739 10.7739 22.5 10.5 22.5ZM10.5 12.5H8.5C8.22614 12.5 8 12.2739 8 12V10C8 9.72614 8.22614 9.5 8.5 9.5H10.5C10.7739 9.5 11 9.72614 11 10V12C11 12.2739 10.7739 12.5 10.5 12.5ZM23.5 17.5H13.5C13.2261 17.5 13 17.2739 13 17V15C13 14.7261 13.2261 14.5 13.5 14.5H23.5C23.7739 14.5 24 14.7261 24 15V17C24 17.2739 23.7739 17.5 23.5 17.5ZM23.5 22.5H13.5C13.2261 22.5 13 22.2739 13 22V20C13 19.7261 13.2261 19.5 13.5 19.5H23.5C23.7739 19.5 24 19.7261 24 20V22C24 22.2739 23.7739 22.5 23.5 22.5ZM13 12V10C13 9.72614 13.2261 9.5 13.5 9.5H23.5C23.7739 9.5 24 9.72614 24 10V12C24 12.2739 23.7739 12.5 23.5 12.5H13.5C13.2261 12.5 13 12.2739 13 12Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
