"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowWelcome(true);
    }, 1000);

    const hideTimeout = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <main className={styles.main}>
      <h1
        className={`${styles.welcome} ${
          showWelcome ? styles["show-welcome"] : ""
        }`}
      >
        Welcome
      </h1>
    </main>
  );
}
