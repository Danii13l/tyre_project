import React, { FC } from "react";

import styles from "./language.module.scss";
import Image from "next/image";

import Select from "react-select";

const options = [
  { value: "ru", label: "РУ" },
  { value: "uz", label: "UZB" },
];
export const Language: FC = (): JSX.Element => {
  return (
    <Select
      id="language"
      instanceId="language"
      options={options}
      placeholder="РУ"
      isSearchable={false}
      classNamePrefix="language_select"
    />
  );
};
