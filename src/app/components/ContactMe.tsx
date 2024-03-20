"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ContactMeProps {
  onClose: () => void;
}

function ContactMe({ onClose }: ContactMeProps) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className={`${styles.ContactMe}`}>
      <div className={styles.detail}>
        <div className={`${styles.pallet} ${closing ? styles.slideout : ""}`}>
          <div className={styles.heading}>Contact me</div>
          <div className={styles.container}>
            <div className={styles.pic}>
              <img src="moon.png" className={styles.Contactimage} alt="" />
            </div>
            <div className={styles.credentials}>
              <div className={styles.contents}>
                <h4>Subject</h4>
                <input type="text" />
                <h4>Message</h4>
                <input type="text" name="" id="" />
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

export default ContactMe;
