import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "./first-post.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function FirstPost() {
  const [result, setResult] = useState("");
  useEffect(() => {
    const getData = async () => {
      const url = "/api/random";
      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(url, options);
        const resultData = await response.json(); // Parse the JSON response
        console.log(resultData);

        // Update the result state with the fetched data
        setResult(resultData.results[0]); // Assuming there's only one result
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className={styles.verse}>
        <h2>{result.scriptures && result.scriptures.join(", ")}</h2>
        <p>The Word: {result.text}</p>
      </div>
    </Layout>
  );
}
