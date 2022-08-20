import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";
import React from "react";
import TagManager from "react-gtm-module";

const Icon = ({ src, link }) => (
  <a className={utilStyles.icons} href={link} target="_blank">
    <Image priority src={src} marginRight={100} height={24} width={24} />
  </a>
);

export default function Home({ allPostsData }) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("init GTM");
      TagManager.initialize({ gtmId: "G-5SNGGWFQJW" });
    } else {
      console.log("GTM server side - ignorning");
    }
  }, []);

  return (
    <Layout home>
      <Head></Head>

      <div className={utilStyles.divicons}>
        <Icon src="/images/gmail.png" link="mailto:danielsuhett99@gmail.com" />
        <Icon src="/images/github.png" link="https://github.com/DanielSuhett" />
        <Icon
          src="/images/linkedin.png"
          link="https://linkedin.com/in/daniel-suhett"
        />
      </div>

      <section className={utilStyles.headingMd}>
        <p>
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
        <h2 className={utilStyles.headingLg}>Anotações</h2>
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
