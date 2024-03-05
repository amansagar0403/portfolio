// Overlay.tsx
"use client";
import React from "react";
import styles from "./page.module.css";

interface OverlayProps {
  header: string;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <div className={styles.back}>
          <button className={styles.closeButton} onClick={props.onClose}>
            <img src="back.png" alt="" />
          </button>
        </div>
        <div className={styles.title}>
          <h1 className={styles.credentialHeader}>{props.header}</h1>
        </div>
      </div>
      <div className={styles.details}></div>
    </div>
  );
};

export default Overlay;
