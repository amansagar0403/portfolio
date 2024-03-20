"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
              <div className={styles.projectImg}>
                <img src="java.png" className={styles.projectImage} alt="" />
              </div>
              <div className={styles.projectDetails}>
                <h5 className={styles.projectName}>Notepad</h5>
                <p className={styles.tech}>Tech Stack - Java</p>
              </div>
            </div>
            <Link
              href="https://github.com/amansagar0403/movie-recommender-system"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.project}>
                <div className={styles.projectImg}>
                  <img src="robot.png" className={styles.projectImage} alt="" />
                </div>
                <div className={styles.projectDetails}>
                  <h5 className={styles.projectName}>
                    Movie Recommender System
                  </h5>
                  <p className={styles.tech}>
                    Tech Stack - Python,Ml algorithms
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="https://github.com/amansagar0403/Apple-Vision-Pro-Clone"
              style={{ textDecoration: "none" }}
            >
              <div className={styles.project}>
                <div className={styles.projectImg}>
                  <img
                    src="frontend.png"
                    className={styles.projectImage}
                    alt=""
                  />
                </div>
                <div className={styles.projectDetails}>
                  <h5 className={styles.projectName}>Apple vision pro clone</h5>
                  <p className={styles.tech}>
                    Tech Stack - Html,Css,Javascript
                  </p>
                </div>
              </div>
            </Link>
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
