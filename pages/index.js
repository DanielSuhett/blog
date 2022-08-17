import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{ whiteSpace: "nowrap" }}>
          Oi, eu sou o Daniel, tenho 22 anos de idade e atuo como Desenvolvedor
        </p>
        <p>
          Trabalho no time de produto da{" "}
          <a href="https://haytek.com.br">Haytek</a>
        </p>
        No momento atual aprendendo:
        <ul>
          <li>Shopify</li>
          <li>Produto</li>
          <li>Refatoração</li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
