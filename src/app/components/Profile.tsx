"use client";
import React from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface OverlayProps {
  header: string;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = (props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <div className={styles.back} onClick={props.onClose}>
          <FontAwesomeIcon className={styles.backicon} icon={faArrowLeft} />
        </div>
        <div className={styles.title}>
          <h1 className={styles.credentialHeader}>{props.header}</h1>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.image}>
          <div className={styles.profile}>
            <img src="profile.jpg" alt="" />
          </div>
        </div>
        <div className={styles.credential}></div>
      </div>
    </div>
  );
};

export default Overlay;
