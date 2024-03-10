"use client";
import React from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ProfileProps {
  onClose: () => void;
}

function Profile({ onClose }: ProfileProps) {
  return (
    <div className={styles.Profile}>
      <div className={styles.navbar}>
        {/* <div className={styles.goBack}>
          <button onClick={onClose} className={styles.back}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div> */}
        <div className={styles.title}>My profile</div>
      </div>
    </div>
  );
}

export default Profile;
