import { FC } from "react";
import Select from "react-select";

interface optionInt {
  value: string;
  label: string;
}

interface selectInt {
  options: optionInt[];
  placehold: string;
  isLabel?: boolean;
  labelText?: string;
  id: string;
  instanceId: string;
}

export const CustomSelect: FC<selectInt> = ({
  options,
  placehold,
  labelText,
  isLabel,
  id,
  instanceId,
}): JSX.Element => {
  return (
    <>
      {isLabel && <label className="label_main_select">{labelText}</label>}
      <Select
        id={id}
        instanceId={instanceId}
        options={options}
        placeholder={placehold}
        isSearchable={false}
        classNamePrefix="main_select"
      />
    </>
  );
};
