"use client";
import React from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ContactMeProps {
  onClose: () => void;
}

function ContactMe({ onClose }: ContactMeProps) {
  return (
    <div className={styles.ContactMe}>
      <button onClick={onClose}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}

export default ContactMe;
