"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Space from "./components/Space";
import "bootstrap/dist/css/bootstrap.min.css";
import Overlay from "./components/Profile";

export default function Home() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayHeader, setOverlayHeader] = useState("");

  const toggleOverlay = (header: string) => {
    setOverlayHeader(header);
    setOverlayVisible(!overlayVisible);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <main
      className={`container-fluid ${styles.main} ${
        overlayVisible ? styles.blurBackground : ""
      }`}
    >
      <div className={`row ${styles.upperdiv}`}>
        <div className={`col-md-6 ${styles.credentials}`}>
          <button
            className={styles.credential}
            onClick={() => toggleOverlay("Profile")}
          >
            Profile
          </button>
          <button
            className={styles.credential}
            onClick={() => toggleOverlay("Skills")}
          >
            Skills
          </button>
          <button
            className={styles.credential}
            onClick={() => toggleOverlay("Projects")}
          >
            Projects
          </button>
          <button
            className={styles.credential}
            onClick={() => toggleOverlay("Contact me")}
          >
            Contact me
          </button>
        </div>
        <div className={`col-md-6 ${styles.moon}`}>
          <img src="moon.png" alt="" />
        </div>
      </div>
      <Space />
      {overlayVisible && (
        <Overlay header={overlayHeader} onClose={closeOverlay} />
      )}
      <div className={styles.lowerSpace}>
        <div className={styles.rocketDiv}>
          <img src="rocket.png" alt="" className={styles.rocket} />
        </div>
      </div>
    </main>
  );
}
