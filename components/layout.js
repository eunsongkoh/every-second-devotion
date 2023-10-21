// manipulates the head of the HTML
import Head from "next/head";

// for optimizing and rendering images
import Image from "next/image";

// css styles
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

//navigating between different pages
import Link from "next/link";

const name = "Every Second Devotions";
// sets the title
export const siteTitle = "Second Devotions";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* sets metadatafor the page like the title, description, and og:Image property for social media sharing  */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <Image
          priority
          src="/public/logo.jpg"
          height={300}
          width={300}
          alt="logo"
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* for the main page */}
            {/* // for the picture */}
            <Image
              priority
              src="/public/logo.jpg"
              height={300}
              width={300}
              alt="cheese"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            {/* for the next page */}
            <Link href="/">
              <Image
                priority
                src="/public/logo.jpg"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      {/* renders the content passed as children to the Layout component */}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
    // exported component is the degault export of this module
  );
}
