import styles from "./today.module.css";
import Head from "next/head";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";

export default function FirstPost() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

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
        const resultData = await response.json(); // Parse the JSON response

        // Update the result state with the fetched data
        setVerse(resultData[1].results[0].context); // getting the verse of the Day
        setTreasure(resultData[1].results[0].text);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <Layout>
      <Head>
        <title>Treasure of the Day</title>
      </Head>
      <div className={styles.verse}>
        <h1>Your Treasure of the Day: {today}</h1>
        <h2>{verse}</h2>
        <p>Treasure: {treasure}</p>
      </div>
    </Layout>
  );
}
