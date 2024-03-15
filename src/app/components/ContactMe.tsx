"use client";
import React from "react";
import styles from "./page.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ContactMeProps {
  onClose: () => void;
}

function ContactMe({ onClose }: ContactMeProps) {
  return (
    <div className={styles.ContactMe}>
      {/* <button onClick={onClose}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button> */}
      <div className={styles.detail}>
        <div className={styles.pallet}>
          <div className={styles.heading}>Profile</div>
          <div className={styles.container}>
            <div className={styles.pic}>
              <img src="profile.jpg" alt="" />
            </div>
            <div className={styles.credentials}>
              <h3 className={styles.title}>Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
