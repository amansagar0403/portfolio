"use client";
import React from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ProjectProps {
  onClose: () => void;
}

function Projects({ onClose }: ProjectProps) {
  return (
    <div className={styles.ContactMe}>
      {/* Your Contact Me content goes here */}
      <button onClick={onClose}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
}

export default Projects;
