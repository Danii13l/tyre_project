import { FC, useContext, useCallback } from "react";
import { useFormik, FormikProps } from "formik";

import { ButtonMain } from "../../../common_components/button_main/ButtonMain";
import { Sms } from "./../../details/Sms";
import { Resend } from "./../../details/Resend";
import { PhoneInput } from "./../../../common_components/input/PhoneInput";
import { PasswordInput } from "../../../common_components/input/PasswordInput";

import { ContextActivebtn } from "../../Account";
import { contextInt } from "./../../Account";

import styles from "../../account.module.scss";

import {
  phoneSPasswordInt,
  phoneSPasswordSchema,
} from "../../validation/accountValidation";

export const SigninSecond: FC = (): JSX.Element => {
  const { chooseActiveBtn } = useContext(ContextActivebtn) as contextInt;

  const handleCancel = useCallback(() => {
    return chooseActiveBtn(1, true);
  }, [chooseActiveBtn]);

  const formik: FormikProps<phoneSPasswordInt> = useFormik<phoneSPasswordInt>({
    initialValues: {
      password: "",
      phone: "",
    },
    validationSchema: phoneSPasswordSchema,
    onSubmit: (values) => alert(values),
  });

  return (
    <form className={styles.form}>
      <div className={styles.inputs_wrapper}>
        <div className={styles.input_wrapper}>
          <PhoneInput
            name="phone"
            labelText="Введите номер телефона"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.phone}
            isTouched={formik.touched.phone}
          />
        </div>

        <PasswordInput
          name="password"
          labelText="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isError={formik.errors.password}
          isTouched={formik.touched.password}
        />

        <Sms done />

        <Resend />
      </div>

      <div className={styles.cancel_submit_buttons}>
        <ButtonMain text="Отмена" type="button" third onClick={handleCancel} />
        <ButtonMain text="Зарегистрироваться" type="submit" />
      </div>
    </form>
  );
};
