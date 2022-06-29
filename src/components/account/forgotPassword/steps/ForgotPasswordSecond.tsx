import { FC } from "react";
import { useFormik, FormikProps } from "formik";

import { ButtonMain } from "../../../common_components/button_main/ButtonMain";
import { Resend } from "../../details/Resend";
import { PasswordInput } from "./../../../common_components/input/PasswordInput";

import {
  passwordSchema,
  passwordInt,
} from "../../validation/accountValidation";

import styles from "../../account.module.scss";

export const ForgotPasswordSecond: FC = (): JSX.Element => {
  const formik: FormikProps<passwordInt> = useFormik<passwordInt>({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => alert(values),
  });

  return (
    <form className={styles.form}>
      <div className={styles.inputs_wrapper}>
        <PasswordInput
          name="password"
          labelText="Введите пароль из СМС"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isError={formik.errors.password}
          isTouched={formik.touched.password}
        />
        <Resend />
      </div>

      <ButtonMain text="Сменить пароль" type="submit" />
    </form>
  );
};
