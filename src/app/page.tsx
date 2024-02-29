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
      <h1 className={styles.welcome}>Welcome</h1>
      {/* {showNewDiv && (
        <div className={styles.newDiv}>
          <div className={styles.home}></div>
        </div>
      )} */}
    </main>
  );
}
