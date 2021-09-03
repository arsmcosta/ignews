import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import Prismic from "@prismicio/client";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | IgNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>01 de setembro de 2021</time>
            <strong>
              What If...? | Episódio com Doutor Estranho é deslumbrante e de
              quebrar o coração
            </strong>
            <p>
              What If...? foi feita sob medida para contar uma história do
              Doutor Estranho.
            </p>
          </a>
          <a href="#">
            <time>01 de setembro de 2021</time>
            <strong>
              What If...? | Episódio com Doutor Estranho é deslumbrante e de
              quebrar o coração
            </strong>
            <p>
              What If...? foi feita sob medida para contar uma história do
              Doutor Estranho.
            </p>
          </a>
          <a href="#">
            <time>01 de setembro de 2021</time>
            <strong>
              What If...? | Episódio com Doutor Estranho é deslumbrante e de
              quebrar o coração
            </strong>
            <p>
              What If...? foi feita sob medida para contar uma história do
              Doutor Estranho.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    }
  );

  console.log(response);

  return {
    props: {},
  };
};
