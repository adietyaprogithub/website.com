import React from "react";
import styles from './Footer.module.css'

export default function Footer() {
  return <div>
    <Foo/>
  </div>;
}

function Foo() {
  return (
    <div className={styles.main}>
      <div>
        <div>
            <hr />
        </div>
        <h6>
          This site is protect by the captcha and Google Privacy Policy and
          Terms and service
        </h6>
      </div>

      <label className={styles.main3}>
        Blogs | Referal Policy | Terms | Careers | Site Map @2023 All Right
        Reserved{" "}
      </label>
    </div>
  );
}
