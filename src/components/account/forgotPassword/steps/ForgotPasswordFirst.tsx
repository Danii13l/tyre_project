import { FC, useCallback, useContext } from "react";

import { useFormik, FormikProps } from "formik";

import { Sms } from "../../details/Sms";

import { ButtonMain } from "../../../common_components/button_main/ButtonMain";
import { PhoneInput } from "../../../common_components/input/PhoneInput";

import { ContextActivebtn } from "../../Account";
import { contextInt } from "./../../Account";

import styles from "../../account.module.scss";
import { phoneInt, phoneSchema } from "./../../validation/accountValidation";

export const ForgotPasswordFirst: FC = (): JSX.Element => {
  const { chooseActiveBtn } = useContext(ContextActivebtn) as contextInt;

  const handleCancel = useCallback(() => {
    return chooseActiveBtn(1, true);
  }, [chooseActiveBtn]);

  const formik: FormikProps<phoneInt> = useFormik<phoneInt>({
    initialValues: {
      phone: "",
    },
    validationSchema: phoneSchema,
    onSubmit: (values) => alert(values),
  });

  return (
    <form className={styles.form}>
      <div className={styles.inputs_wrapper}>
        <PhoneInput
          name="phone"
          labelText="Введите номер телефона"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isError={formik.errors.phone}
          isTouched={formik.touched.phone}
        />

        <Sms />
      </div>

      <div className={styles.cancel_submit_buttons}>
        <ButtonMain text="Отмена" type="button" third onClick={handleCancel} />
        <ButtonMain text="Сменить пароль" type="submit" />
      </div>
    </form>
  );
};
