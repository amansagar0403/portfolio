"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ProjectsProps {
  onClose: () => void;
}

function Projects({ onClose }: ProjectsProps) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={`${styles.Projects}`}>
      <div className={styles.detail}>
        <div
          className={`${styles.skillsPallet} ${closing ? styles.slideout : ""}`}
        >
          <div className={styles.heading}>Projects</div>
          <div className={styles.projectList}>
            <div className={styles.project}>
              <div className={styles.projectImg}></div>
              <div className={styles.projectDetails}></div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectImg}></div>
              <div className={styles.projectDetails}></div>
            </div>
            <div className={styles.project}>
              <div className={styles.projectImg}></div>
              <div className={styles.projectDetails}></div>
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

export default Projects;
