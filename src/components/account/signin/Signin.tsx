import { FC, useState } from "react";

import { SigninFirst } from "./steps/SigninFirst";
import { SigninSecond } from "./steps/SigninSecond";

export const Signin: FC = (): JSX.Element => {
  const [steps, setSteps] = useState(1);
  return (
    <>
      {steps === 1 && <SigninFirst />}
      {steps === 2 && <SigninSecond />}
    </>
  );
};
