export interface InputInt {
  name: string;
  labelText?: string;
  value?: string | number;
  onChange: (e: string | React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: string | React.ChangeEvent<HTMLInputElement>) => void;
  isError?: string;
  isTouched?: boolean;
}
