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

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://amansagar.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        // Clear input fields
        setEmail("");
        setSubject("");
        setMessage("");
        // Handle success, maybe show a message to the user
      } else {
        console.error("Error sending email");
        // Handle error, maybe show an error message to the user
      }
    } catch (error) {
      console.error("Error sending email", error);
      // Handle error, maybe show an error message to the user
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
                  type="submit"
                  onClick={handleSubmit}
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
