import { FC, useEffect, useRef, useState, useCallback } from "react";

import Image from "next/image";

import { useFormik, FormikProps } from "formik";
import * as yup from "yup";

import { ButtonMain } from "../../../common_components/button_main/ButtonMain";
import { PhoneInput } from "../../../common_components/input/PhoneInput";
import { PasswordInput } from "../../../common_components/input/PasswordInput";
import { TextInput } from "./../../../common_components/input/TextInput";

import styles from "../settings.module.scss";

interface formsInt {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Имя должно быть не меньше 2 символов")
    .required("Обязательное поле"),
  lastName: yup
    .string()
    .min(2, "Имя должно быть не меньше 2 символов")
    .required("Обязательное поле"),
  password: yup
    .string()
    .min(8, "Пароль должнен быть не меньше 8 символов")
    .required("Обязательное поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают")
    .required("Обязательное поле"),
  phone: yup
    .string()
    .matches(/\(\d\d\) \d\d\d-\d\d-\d\d/, "Неверный формат")
    .required("Телефон обязательно для заполнения"),
});

export const ChangeSettings: FC = (): JSX.Element => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileINputRef = useRef<HTMLInputElement>(null);

  const changePhoto = useCallback((ev: any): void => {
    const file: File = ev?.target.files[0];

    file && file.type.slice(0, 5) === "image" ? setPhoto(file) : setPhoto(null);
  }, []);

  useEffect(() => {
    if (photo) {
      const reader: FileReader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [photo]);

  const formik: FormikProps<formsInt> = useFormik<formsInt>({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <div>
      <h3 className={styles.change_title}>Личные данные</h3>
      <form className={styles.change_form} onSubmit={formik.handleSubmit}>
        <div className={styles.put_photo_wrapper}>
          <div className={styles.put_photo_img_wrapper}>
            <Image
              src={preview ? preview : "/avatar.png"}
              alt="avatar"
              layout="fill"
            />
          </div>

          <div className={styles.buttons_photo_wrapper}>
            <label htmlFor="file" className={styles.buttons_photo}>
              Добавить фото
            </label>
            <input
              type="file"
              id="file"
              className={styles.file_input}
              onChange={changePhoto}
              ref={fileINputRef}
              accept="image/*"
            />

            <button
              type="button"
              className={styles.buttons_photo}
              onClick={() => setPreview(null)}
            >
              Удалить фото
            </button>
          </div>
        </div>

        <div className={styles.inputs_wrapper}>
          <div className={styles.input_wrapper}>
            <TextInput
              name="firstName"
              labelText="Имя"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.firstName}
              isTouched={formik.touched.firstName}
            />
          </div>
          <div className={styles.input_wrapper}>
            <TextInput
              name="lastName"
              labelText="Фамилия"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.lastName}
              isTouched={formik.touched.lastName}
            />
          </div>
          <PhoneInput
            name="phone"
            labelText="Номер телефона"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.phone}
            isTouched={formik.touched.phone}
            value={formik.values.phone}
          />
        </div>

        <h3 className={styles.change_title}>Новый пароль</h3>

        <div className={styles.inputs_wrapper}>
          <div className={styles.password_wrapper}>
            <div className={styles.input_wrapper}>
              <PasswordInput
                name="password"
                labelText="Пароль"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={formik.errors.password}
                isTouched={formik.touched.password}
              />
            </div>

            <PasswordInput
              name="confirmPassword"
              labelText="Подтвердить пароль"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.confirmPassword}
              isTouched={formik.touched.confirmPassword}
            />
          </div>
        </div>

        <div className={styles.btn_submit}>
          <ButtonMain text="Сохранить" type="submit" />
        </div>
      </form>
    </div>
  );
};
