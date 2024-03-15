"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ProfileProps {
  onClose: () => void;
}

function Profile({ onClose }: ProfileProps) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={`${styles.Profile}`}>
      <div className={styles.detail}>
        <div className={`${styles.pallet} ${closing ? styles.slideout : ""}`}>
          <div className={styles.heading}>Profile</div>
          <div className={styles.container}>
            <div className={styles.pic}>
              <img src="profile.jpg" className={styles.image} alt="" />
            </div>
            <div className={styles.credentials}>
              <div className={styles.contents}>
                <h3 className={styles.title}>Name:</h3>
                <h5 className={styles.input}>Aman Sagar</h5>
                <h3 className={styles.title}>Details:</h3>
                <h5 className={styles.input}>
                  A passionate and ambitious computer science enthusiast on a
                  journey to explore, innovate, and create in the ever-evolving
                  world of technology.
                </h5>
                <h3 className={`${styles.title} ${styles.hide}`}>Hobbies:</h3>
                <h5 className={`${styles.input} ${styles.hide}`}>
                  Listening to music🎸
                </h5>
              </div>
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

export default Profile;
