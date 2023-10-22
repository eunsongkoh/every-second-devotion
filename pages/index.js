import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import HomeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={HomeStyles.card}>
        <section className={utilStyles.headingMd}>
          <p>
            An app to generate up to 500 short descriptions for a random verse
            throughout the Bible throughout the day
          </p>
        </section>
      </section>
      <p>
        <Link href="posts/first-post">
          <button className={HomeStyles.button}>generate</button>
        </Link>
      </p>
      <footer>created by Eunsong Koh</footer>
    </Layout>
  );
}
