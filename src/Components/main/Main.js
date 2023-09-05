import React from "react";
import Navbara from "../Navbar/Navbar";
import FirstSlider from "../Firstslider/FirstSlider";
import Cource from "../placement_comp/Cource";
import { Placeholder } from "react-bootstrap";
import Placement from "../placement_Student/Placement";
import Compony from "../Compony/Compony";
import Footer from "../footer/Footer";
import styles from "./main.module.css";
import Combine from "../pages/Combine";

export default function Main() {
  return (
    <div className={styles.container}>
      <Navbara />
      <FirstSlider />
      <Combine />
      <Cource />
      <Placement />
      <Compony />
      <Footer />
    </div>
  );
}
