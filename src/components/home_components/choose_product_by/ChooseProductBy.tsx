import { Container } from "./../../container/Container";
import { useState } from "react";

interface buttonsInt {
  id: number;
  text: string;
}

const buttons = [
  { id: 1, text: "ПОПУЛЯРНОЕ" },
  { id: 2, text: "НОВИНКИ" },
  { id: 3, text: "ПОПУЛЯРНОЕ" },
];

export const ChooseProductBy = () => {
  const [activeButton, setAvtiveButton] = useState<number>(1);

  const handleActiveButton = (ev: any) => {
    setAvtiveButton(+ev.target.dataset.id);
  };

  return (
    <div className="choose_product_by">
      <Container>
        <div className="choose_product_by__top">
          <div className="choose_product_by__top-buttons">
            {buttons.map((item) => (
              <button
                key={item.id}
                data-id={item.id}
                onClick={handleActiveButton}
                className={item.id === activeButton ? "active" : ""}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>

        <div className="choose_product_by__slides"></div>
      </Container>
    </div>
  );
};
