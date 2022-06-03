import styles from "../settings.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { InputPrimary } from "../../../common_components/input/InputPrimary";

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
    type: "text",
    name: "patronymic",
    labelFor: "patronymic",
    labelText: "Отчество",
  },
  {
    id: 4,
    type: "tel",
    name: "tel",
    labelFor: "tel",
    labelText: "Номер телефона",
  },
];

export const ChangeSettings = () => {
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileINputRef = useRef<any>();

  const changePhoto = (ev: any): void => {
    const file = ev?.target.files[0];

    if (file && file.type.substr(0, 5) === "image") {
      setPhoto(file);
    } else {
      setPhoto(null);
    }
  };

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
  }, [photo]);

  const deletePhoto = (ev: any) => {
    setPreview(null);
  };

  return (
    <div>
      <h2 className={styles.change_title}>Личные данные</h2>
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
              onClick={deletePhoto}
            >
              Удалить фото
            </button>
          </div>
        </div>

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
        <h3 className={styles.change_password_title}>Новый пароль</h3>

        <div className={styles.password_wrapper}>
          <InputPrimary
            type="password"
            name="password"
            labelFor="password"
            labelText="Пароль"
          />
          <span></span>
          <InputPrimary
            type="password"
            name="password_confirm"
            labelFor="password_confirm"
            labelText="Подтвердить пароль"
          />
        </div>
      </form>
    </div>
  );
};
