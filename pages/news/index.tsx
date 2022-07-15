import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next";

import { BreadCrumbs } from "../../src/components/common_components/bread_crumbs/BreadCrumbs";
import { Container } from "./../../src/components/common_components/container/Container";
import { checkLength } from "./../../src/functions/checkLength";

import styles from "./news..module.scss";

import image from "../../src/images/fake_photo/balloon2.png";

const fakeData = [
  {
    id: 1,
    img: image,
    title: "Королевская Индия",
    text: "Две страны в одном туре с лучшими экскурсиями: две столицы, Плитвицкие озера, Блед и Бохинь, Постойнская пещера, Пиран, Порторож и многое другое!",
    href: "#!",
  },
  {
    id: 2,
    img: image,
    title: "Королевская Индия",
    text: "Две страны в одном туре с лучшими экскурсиями: две столицы, Плитвицкие озера, Блед и Бохинь, Постойнская пещера, Пиран, Порторож и многое другое!",
    href: "#!",
  },
  {
    id: 3,
    img: image,
    title: "Королевская Индия",
    text: "Две страны в одном туре с лучшими экскурсиями: две столицы, Плитвицкие озера, Блед и Бохинь, Постойнская пещера, Пиран, Порторож и многое другое!Две страны в одном туре с лучшими экскурсиями: две столицы, Плитвицкие озера, Блед и Бохинь, Постойнская пещера, Пиран, Порторож и многое другое!Две страны в одном туре с лучшими экскурсиями: две столицы, Плитвицкие озера, Блед и Бохинь, Постойнская пещера, Пиран, Порторож и многое другое!",
    href: "#!",
  },
  {
    id: 4,
    img: image,
    title: "Королевская Индия",
    text: "Две страны в одном туре с лучшими экскурсиями: две столицы, Плитвицкие озера, Блед и Бохинь, Постойнская пещера, Пиран, Порторож и многое другое!",
    href: "#!",
  },
  {
    id: 5,
    img: image,
    title: "Королевская Индия",
    text: "Две страны в одном туре с лучшими экскурсиями: две столицы, Плитвицкие озера, Блед и Бохинь, Постойнская пещера, Пиран, Порторож и многое другое!",
    href: "#!",
  },
];

const News: NextPage = (): JSX.Element => {
  return (
    <section>
      <Container>
        <BreadCrumbs list={[{ id: 1, href: "/", text: "Home" }]} last="News" />

        <h1 className={styles.title}>Новостной блог</h1>

        {fakeData.map((item) => {
          return (
            <div className={styles.wrapper_cover} key={item.id}>
              <div className={styles.cardBlock}>
                <div className={styles.leftBlock}>
                  <div className={styles.imgBlock}>
                    <Image
                      src={item.img}
                      alt="portfolio_1"
                      layout="fill"
                      className={styles.imgItem}
                    />
                  </div>
                </div>
                <div className={styles.rightBlock}>
                  <div>
                    <div className={styles.contentBlock}>
                      <div className={styles.topBlog}>
                        <p className={styles.item_title}>{item.title}</p>
                        <p className={styles.desc}> {checkLength(item.text)}</p>
                      </div>
                      <div className={styles.bottomBlog}>
                        <Link href="/news/single_news">
                          <a className={styles.btn}>
                            Подробнее
                            <div className={styles.imgArrow}>
                              <Image
                                src="/arrow-link.svg"
                                alt="arrow_icon"
                                layout="fill"
                                className={styles.arrowIcon}
                              />
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default News;
