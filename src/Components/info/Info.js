import React from "react";
import styles from './Inof.module.css'

export default function Info() {
  return (
    <div>
        <Intro/>
    </div>
  );
}

function Intro() {
  return (
    <div  className={styles.container}>
      <div className={styles.main1}>
        <h2>What Sets us apart?</h2>
      </div>
      <div className={styles.main2}>
        <h3>
          FunctionUp helps candidate attain skills that allign with the cuurent
          market needs
        </h3>
      </div>

      <div className={styles.main3}>
        <label>
          Our curriculum is designed by MAANG and IIT professionals with vast
          experience in the industry. With our Curriculum you can get the much
          needed boost to your career
        </label>
      </div>
    </div>
  );
}
