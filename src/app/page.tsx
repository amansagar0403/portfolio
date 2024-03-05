"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Space from "./components/Space";
import "bootstrap/dist/css/bootstrap.min.css";
import Overlay from "./components/Overlay";

export default function Home() {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <main className={`container-fluid ${styles.main}`}>
      <div className={`row ${styles.upperdiv}`}>
        <div className={`col-md-6 ${styles.credentials}`}>
          <button className={styles.credential} onClick={toggleOverlay}>
            Profile
          </button>
          <button className={styles.credential} onClick={toggleOverlay}>
            Skills
          </button>
          <button className={styles.credential} onClick={toggleOverlay}>
            Projects
          </button>
          <button className={styles.credential} onClick={toggleOverlay}>
            Contact me
          </button>
        </div>
        <div className={`col-md-6 ${styles.moon}`}>
          <img src="moon.png" alt="" />
        </div>
      </div>
      <Space />
      {overlayVisible && <Overlay header="Profile" onClose={closeOverlay} />}
      <div className={styles.lowerSpace}>
        <div className={styles.rocketDiv}>
          <img src="rocket.png" alt="" className={styles.rocket} />
        </div>
      </div>
    </main>
  );
}
