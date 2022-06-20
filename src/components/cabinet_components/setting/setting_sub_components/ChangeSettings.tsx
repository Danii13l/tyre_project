import { FC, useEffect, useRef, useState, useCallback } from "react";

import Image from "next/image";

import styles from "../settings.module.scss";

import { InputPrimary } from "../../../common_components/input/InputPrimary";
import { ButtonMain } from "../../../common_components/button_submit/ButtonMain";

const inputs = [
  {
    id: 1,
    type: "text",
    name: "username",
    labelFor: "username",
    labelText: "Имя",
  },
  {
    id: 2,
    type: "text",
    name: "surname",
    labelFor: "surname",
    labelText: "Фамилия",
  },
  {
    id: 3,
    type: "tel",
    name: "tel",
    labelFor: "tel",
    labelText: "Номер телефона",
  },
];

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

  return (
    <div>
      <h3 className={styles.change_title}>Личные данные</h3>
      <form action="" className={styles.change_form}>
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

        <div className={styles.input_wrapper}>
          {inputs.slice(0, 4).map(({ id, type, name, labelFor, labelText }) => {
            return (
              <InputPrimary
                key={id}
                type={type}
                name={name}
                labelFor={labelFor}
                labelText={labelText}
              />
            );
          })}
        </div>

        <h3 className={styles.change_title}>Новый пароль</h3>

        <div className={styles.input_wrapper}>
          <div className={styles.password_wrapper}>
            <InputPrimary
              type="password"
              name="password"
              labelFor="password"
              labelText="Пароль"
            />

            <InputPrimary
              type="password"
              name="password_confirm"
              labelFor="password_confirm"
              labelText="Подтвердить пароль"
            />
          </div>
        </div>

        <div className={styles.btn_submit}>
          <ButtonMain text="Сохранить" type="button" />
        </div>
      </form>
    </div>
  );
};
