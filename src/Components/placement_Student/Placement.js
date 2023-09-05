import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Placement.module.css";

export default function Placement() {
  const arr = [
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Jim",
      info: "Some quick example text to build on the card title and make up the",
    },
  ];
  return (
    <div className={styles.container} id='placement'>
      <BasicExample data={arr} />
    </div>
  );
}

function BasicExample({ data }) {
  return (
    <div>
      <div className={styles.main2}>
        <hr />
        Our Student Placements</div>
      <div className={styles.cardContainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <Card>
              <div className={styles.imgr1}>
                <Card.Img
                  className={styles.imgr}
                  variant="top"
                  src={item.img}
                />
                <hr />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.info}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
