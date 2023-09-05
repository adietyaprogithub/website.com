import React from "react";
import styles from "./Cource.module.css";

export default function Cource() {
  return (
    <div>
     
      <div className={styles.main2}>
      <hr />
        <h1>Courcess We Offer</h1>
      </div>
      <div className={styles.main1}>
        <Cource1 />
        <Cource1 />
        <Cource1 />
      </div>
    </div>
  );
}

function Cource1() {
  return (
    <div>
      <div className={styles.container} id='cource'>
        <div className={styles.header}>
          <div className={styles.title}>
            <h3>Data Science and AI</h3>
          </div>
          <div className={styles.labels}>
            <span className={styles.label}>Working professional</span>
          </div>
        </div>
        <div className={styles.description}>
          <p>This program will help you get the US-based companies.</p>
        </div>
        <div className={styles.list}>
          <ol>
            <li className={styles.listItem}>Live Classes</li>
            <li className={styles.listItem}>Interview Preparation</li>
            <li className={styles.listItem}>24 * 7 Classes</li>
            <li className={styles.listItem}>EMI starts with 10k</li>
            <li className={styles.listItem}>Lifetime Placement assistance</li>
          </ol>
        </div>
        <div className={styles.outcomes}>
          <h3>Career Outcomes</h3>
          <p>Data Analyst, Data Scientist, Machine Learning Engineer</p>
        </div>
        <div className={styles.footer}>
          <button className={`${styles.button} ${styles.width40}`}>
            View More
          </button>
          <label className={styles.startDateLabel}>Start On</label>
          <h2 className={styles.startDate}>23rd Sept 2023</h2>
        </div>
      </div>
    </div>
  );
}
