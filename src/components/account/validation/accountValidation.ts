import * as yup from "yup";

export interface phoneInt {
  phone: string;
}
export const phoneSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(/\(\d\d\) \d\d\d-\d\d-\d\d/, "Неверный формат")
    .required("Телефон обязательно для заполнения"),
});

export interface passwordInt {
  password: string;
}
export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Пароль должнен быть не меньше 8 символов")
    .required("Обязательное поле"),
});

export interface phoneSPasswordInt {
  phone: string;
  password: string;
}

export const phoneSPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Пароль должнен быть не меньше 8 символов")
    .required("Обязательное поле"),
  phone: yup
    .string()
    .matches(/\(\d\d\) \d\d\d-\d\d-\d\d/, "Неверный формат")
    .required("Телефон обязательно для заполнения"),
});

export interface confirmPasswordInt {
  password: string;
  confirmPassword: string;
}

export const confirmPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Пароль должнен быть не меньше 8 символов")
    .required("Обязательное поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают")
    .required("Обязательное поле"),
});
