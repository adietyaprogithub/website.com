import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./FirstSlider.module.css";

export default function FirstSlider() {
  return (
    <div>
      <UncontrolledExample />
    </div>
  );
}

function UncontrolledExample() {
  return (
    <div className={styles.container} id='home'>
      <Carousel>
        <Carousel.Item>
          <div className={styles.one}></div>
          <Carousel.Caption>
            <div className={styles.heading1}>
              <h1 className={styles.heading}>
                Unlock Your Potential with Online Learning | Upskill with
                Top-notch Courses
              </h1>
            </div>
            <p className={styles.heading2}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.one}></div>
          <Carousel.Caption>
            <h1 className={styles.heading1}>
              Unlock Your Potential with Online Learning | Upskill with
              Top-notch Courses
            </h1>
            <p className={styles.heading2}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.one}></div>
          <Carousel.Caption>
            <h1 className={styles.heading1}>
              Unlock Your Potential with Online Learning | Upskill with
              Top-notch Courses
            </h1>
            <p className={styles.heading2}>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
