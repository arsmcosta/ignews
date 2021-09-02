import Head from "next/head";
import styles from "./styles.module.scss";

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
