import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          An app to generate up to 500 short descriptions for a random verse
          throughout the Bible
        </p>
        <p>
          <Link href="posts/first-post">
            <button className={utilStyles.button}>Generate</button>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
