"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com"; // Import emailjs library

interface ContactMeProps {
  onClose: () => void;
}

function ContactMe({ onClose }: ContactMeProps) {
  const [closing, setClosing] = useState(false);
  const [name, setName] = useState(""); // New state for name
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
      const serviceId = "service_zz1zlwi";
      const templateId = "template_fo857tb";
      const publicKey = "1C2xfSF2DpEDUBrrD";
      // Use EmailJS to send the email
      const templateParams = {
        from_name: name, // Use name entered by the user
        message: `Email: ${email}\n\n${message}`, // Combine email and message
      };
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response: any) => {
          console.log("Email sent succesfully!", response);
          setName(""); // Clear input fields on success (optional)
          setEmail("");
          setSubject("");
          setMessage("");
          setError(null); // Clear any previous error state
        });
      // console.log("Email sent successfully");
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
                <h4 className={styles.header}>Name:</h4>
                <input
                  type="text"
                  className={styles.Contactinput}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <h4 className={styles.header}>Email:</h4>
                <input
                  type="text"
                  className={styles.Contactinput}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h4 className={styles.header}>Message:</h4>
                <textarea
                  className={`${styles.Contactinput} ${styles.biginput}`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className={styles.submitBtn}
                  type="button"
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
