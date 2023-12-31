import Head from "next/head";
import Layout from "../../components/layout";
import styles from "./first-post.module.css";
import { useState, useEffect } from "react";

export default function FirstPost() {
  const [verse, setVerse] = useState("");
  const [treasure, setTreasure] = useState("");
  useEffect(() => {
    const getData = async () => {
      const url = "/api/random";
      const options = {
        method: "GET",
      };

      try {
        const response = await fetch(url, options);
        const resultData = await response.json(); // parse the JSON response
        console.log("THE RESPONSE");
        console.log(resultData);

        // Update the result state with the fetched data
        setVerse(resultData[0].results[0].context); // getting the random verse
        console.log(resultData[0].results[0].context);

        setTreasure(resultData[0].results[0].text);
        console.log(verse);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <Layout>
      <Head>
        <title>Random Treasure</title>
      </Head>
      <div className={styles.verse}>
        <h1>Your Random Treasure</h1>
        <h2>{verse}</h2>
        <p>Treasure: {treasure}</p>
      </div>
    </Layout>
  );
}
