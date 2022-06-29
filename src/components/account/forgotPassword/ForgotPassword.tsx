import { FC, useState } from "react";

import { ForgotPasswordFirst } from "./steps/ForgotPasswordFirst";
import { ForgotPasswordSecond } from "./steps/ForgotPasswordSecond";
import { ForgotPasswordThird } from "./steps/ForgotPasswordThird";

export const ForgotPassword: FC = (): JSX.Element => {
  const [steps, setSteps] = useState(1);
  return (
    <>
      {steps === 1 && <ForgotPasswordFirst />}
      {steps === 2 && <ForgotPasswordSecond />}
      {steps === 3 && <ForgotPasswordThird />}
    </>
  );
};
