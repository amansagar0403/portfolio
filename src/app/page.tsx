"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Space from "./components/Space";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function Home() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayComponent, setOverlayComponent] =
    useState<React.ReactNode | null>(null);

  const toggleOverlay = (component: React.ReactNode) => {
    setOverlayComponent(component);
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
            onClick={() => toggleOverlay(<Profile onClose={closeOverlay} />)}
          >
            Profile
          </button>
          <button
            className={styles.credential}
            onClick={() => toggleOverlay(<Skills onClose={closeOverlay} />)}
          >
            Skills
          </button>
          <button
            className={styles.credential}
            onClick={() => toggleOverlay(<Projects onClose={closeOverlay} />)}
          >
            Projects
          </button>
          <button
            className={styles.credential}
            onClick={() => toggleOverlay(<ContactMe onClose={closeOverlay} />)}
          >
            Contact me
          </button>
        </div>
        <div className={`col-md-6 ${styles.moon}`}>
          <img src="moon.png" alt="" />
        </div>
      </div>
      <Space />
      {overlayVisible && overlayComponent && <div>{overlayComponent}</div>}
      <div className={styles.lowerSpace}>
        <div className={styles.rocketDiv}>
          <img src="rocket.png" alt="" className={styles.rocket} />
        </div>
      </div>
    </main>
  );
}
