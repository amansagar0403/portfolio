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
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (!response.ok) {
        // Handle non-200 status codes (e.g., server error)
        throw new Error(`Email sending failed with status: ${response.status}`);
      }

      console.log("Email sent successfully");
      setEmail(""); // Clear input fields on success (optional)
      setSubject("");
      setMessage("");
      setError(null); // Clear any previous error state
    } catch (error) {
      console.error(error); // Set error state for UI display
    }
  };

  return (
    <div className={`${styles.ContactMe}`}>
      <div className={styles.detail}>
        <div className={`${styles.pallet} ${closing ? styles.slideout : ""}`}>
          <div className={styles.heading}>Contact me</div>
          <div className={styles.container}>
            <div className={styles.pic}>
              <img src="moon1.png" className={styles.Contactimage} alt="" />
            </div>
            <div className={styles.credentials}>
              <div className={styles.contents}>
                <h4 className={styles.header}>Email id:</h4>
                <input
                  type="text"
                  className={styles.Emailinput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h4 className={styles.header}>Subject:</h4>
                <input
                  type="text"
                  className={styles.Contactinput}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <h4 className={styles.header}>Message:</h4>
                <textarea
                  className={`${styles.Contactinput} ${styles.biginput}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className={styles.submitBtn}
                  type="button" // Prevent form submission
                  onClick={handleSubmit} // Bind handleSubmit function to onClick event
                >
                  Submit
                </button>
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
