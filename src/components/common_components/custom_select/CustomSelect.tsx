import Select from "react-select";

interface selectInt {
  value: number | string;
  label: number | string;
}

export const CustomSelect = ({ options }: any) => {
  return (
    <Select
      options={options}
      placeholder="Select country"
      classNamePrefix="custom_select"
    />
  );
};
