"use client";
import React from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface SKillsProps {
  onClose: () => void;
}

function Skills({ onClose }: SKillsProps) {
  return (
    <div className={styles.ContactMe}>
      <button onClick={onClose}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}

export default Skills;
