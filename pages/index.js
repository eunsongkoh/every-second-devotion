import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Happy Birthday!</p>
        <p>
          <button
            className={utilStyles.button}
            onClick={() => router.push("posts/first-post")}
          >
            Generate
          </button>
        </p>
      </section>
    </Layout>
  );
}
