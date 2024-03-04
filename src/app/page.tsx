"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Space from "./components/Space";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main className={`container-fluid ${styles.main}`}>
      <div className={`row ${styles.upperdiv}`}>
        <div className={`col-md-6 ${styles.credentials}`}>
          <button className={styles.credential}>Profile</button>
          <button className={styles.credential}>Skills</button>
          <button className={styles.credential}>Projects</button>
          <button className={styles.credential}>Contact me</button>
        </div>
        <div className={`col-md-6 ${styles.moon}`}></div>
      </div>
      <Space />
      <div className={styles.lowerSpace}>
        <div className={styles.rocketDiv}>
          <img src="rocket.png" alt="" className={styles.rocket} />
        </div>
      </div>
    </main>
  );
}
