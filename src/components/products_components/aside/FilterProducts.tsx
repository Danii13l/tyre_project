import { FC } from "react";

import { CustomSelect } from "../../common_components/custom_select/CustomSelect";
import { ButtonMain } from "../../common_components/button_main/ButtonMain";

import styles from "./filterProducts.module.scss";

interface optionsInt {
  value: string;
  label: string;
}

const options: optionsInt[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const FilterProducts: FC = (): JSX.Element => {
  return (
    <aside className={styles.filter_products}>
      <h2 className={styles.title}>Фильтры</h2>
      <div className={styles.filter_selects_wrapper}>
        <div className={styles.filter_select_wrapper}>
          <CustomSelect
            options={options}
            placehold="Все сезоны"
            labelText="Все сезоны"
            isLabel
            id="seasons"
            instanceId="seasons"
          />
        </div>
        <div className={styles.filter_select_wrapper}>
          <CustomSelect
            options={options}
            placehold="Все"
            labelText="Производитель"
            isLabel
            id="company"
            instanceId="company"
          />
        </div>
        <div className={styles.filter_select_wrapper}>
          <CustomSelect
            options={options}
            placehold="Все"
            labelText="Модель"
            isLabel
            id="model"
            instanceId="model"
          />
        </div>
      </div>

      <div className={styles.filter_selects_wrapper}>
        <div className={styles.filter_select_wrapper}>
          <CustomSelect
            options={options}
            placehold="Все сезоны"
            labelText="Ширина"
            isLabel
            id="width"
            instanceId="witdh"
          />
        </div>
        <div className={styles.filter_select_wrapper}>
          <CustomSelect
            options={options}
            placehold="Все"
            labelText="Профиль"
            isLabel
            id="sphere"
            instanceId="sphere"
          />
        </div>
        <div className={styles.filter_select_wrapper}>
          <CustomSelect
            options={options}
            placehold="Все"
            labelText="Диаметр"
            isLabel
            id="diameter"
            instanceId="diameter"
          />
        </div>
      </div>

      <label className={styles.select_index_loading_label}>Цена(сум)</label>
      <div className={styles.select_price}>
        <input type="text" placeholder="0" />
        <span>-</span>
        <input type="text" placeholder="99 999 999" />
      </div>

      <ButtonMain text="Подобрать" type="button" />
    </aside>
  );
};
