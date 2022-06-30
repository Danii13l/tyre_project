import React from "react";

import { NextPage } from "next";
import Image from "next/image";

import { Container } from "../../src/components/common_components/container/Container";
import { BreadCrumbs } from "./../../src/components/common_components/bread_crumbs/BreadCrumbs";

import styles from "../../styles/pages/news/singleNews.module.scss";

import img from "../../src/images/fake_photo/balloon2.png";

const SingleNews: NextPage = (): JSX.Element => {
  return (
    <section>
      <Container>
        <BreadCrumbs
          list={[
            { id: 1, href: "/", text: "Home" },
            { id: 2, href: "/news", text: "News" },
          ]}
          last="Single news"
        />

        <h1 className={styles.title}>
          Как провести первую неделю в Дубае. Цены.
        </h1>

        <div className={styles.author_wrapper}>
          <p>
            Автор:<span>Lalalal</span>
          </p>

          <p>22 марта 2002</p>
        </div>

        <div className={styles.img_wrapper}>
          <Image src={img} alt="news" layout="fill" objectFit="cover" />
        </div>

        <div className={styles.info_wrapper}>
          <h2 className={styles.subtitle}>Дубай — невероятный!</h2>
          <p>
            Этот крупнейший город ОАЭ не перестает меняться и удивлять. Даже те,
            кто побывал в эмирате всего 7-10 лет назад, уже не имеют полного
            права говорить «Я видел Дубай», потому как Дубай каждый день готовит
            новые сюрпризы своим жителям и гостям. Неизменными остаются лишь
            несколько вещей: стремительное движение города вверх, к сияющим
            звездам и новым рекордам высоты зданий, невероятная архитектура и
            грандиозность проектов, ошеломительный шоппинг, насыщенная ночная и
            развлекательная жизнь и пустыня, в которой вырос этот современный и
            космополитичный центр притяжения.
          </p>
          <p>
            Этот крупнейший город ОАЭ не перестает меняться и удивлять. Даже те,
            кто побывал в эмирате всего 7-10 лет назад, уже не имеют полного
            права говорить «Я видел Дубай», потому как Дубай каждый день готовит
            новые сюрпризы своим жителям и гостям. Неизменными остаются лишь
            несколько вещей: стремительное движение города вверх, к сияющим
            звездам и новым рекордам высоты зданий, невероятная архитектура и
            грандиозность проектов, ошеломительный шоппинг, насыщенная ночная и
            развлекательная жизнь и пустыня, в которой вырос этот современный и
            космополитичный центр притяжения.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SingleNews;
