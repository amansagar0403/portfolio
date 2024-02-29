"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [showNewDiv, setShowNewDiv] = useState(false);

  useEffect(() => {
    // Set showNewDiv to true after the blinking animation (4 seconds)
    const timeoutId = setTimeout(() => {
      setShowNewDiv(true);
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.welcomeDiv}>
        <h1 className={styles.header}>Welcome</h1>
      </div>
      {showNewDiv && (
        <div className={styles.nameDiv}>
          <h1 className={styles.askingName}>Please enter your name</h1>
          <form action="">
            <input type="text" className={styles.input} />
          </form>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      )}
      {/* {showNewDiv && (
        <div className={styles.newDiv}>
          <div className={styles.name}></div>
        </div>
      )} */}
    </main>
  );
}
