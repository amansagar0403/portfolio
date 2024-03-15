"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface SkillsProps {
  onClose: () => void;
}

function Skills({ onClose }: SkillsProps) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={`${styles.Skills}`}>
      <div className={styles.detail}>
        <div
          className={`${styles.skillsPallet} ${closing ? styles.slideout : ""}`}
        >
          <div className={styles.heading}>Skills</div>
          <div className={styles.mainDiv}>
            <div className={styles.achieved}>
              <h4 className={styles.head}>Achieved</h4>
              <div className={styles.pictures}></div>
            </div>
            <div className={styles.pending}>
              <h4 className={styles.head}>Working</h4>
            </div>
          </div>
          <div className={styles.backbtn}>
            <button onClick={handleClose} className={styles.btn}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
