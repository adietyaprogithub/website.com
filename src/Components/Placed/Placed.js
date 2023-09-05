import React from "react";
import style from "./Placed.module.css";

export default function Placed() {
  const arr = [
    {
      name: "Alan",
      package: "3.5LPA",
      placed: "today",
      company:'Placed @ Tata'
    },
    {
      name: "Ram",
      package: "3.5LPA",
      placed: "today",
      company:'Placed @ Tata'
    },
    {
      name: "Sham",
      package: "3.5LPA",
      placed: "today",
     company:'Placed @ Tata'
    },
    {
      name: "Sammer",
      package: "3.5LPA",
      placed: "today",
     company:'Placed @ Tata'
    },
    {
      name: "Mary",
      package: "3.5LPA",
      placed: "today",
     company:'Placed @ Tata'
    },
    {
      name: "Alan",
      package: "3.5LPA",
      placed: "today",
     company:'Placed @ Tata'
    },
    {
        name: "Alan",
        package: "3.5LPA",
        placed: "today",
       company:'Placed @ Tata'
      },
      {
        name: "Alan",
        package: "3.5LPA",
        placed: "today",
       company:'Placed @ Tata'
      },
  ];
  return (
    <div>
      <Place data={arr} />
    </div>
  );
}

function Place({ data }) {
  return (
    <div className={style.container}>
      <div className={style.main1}>
        {data.map((item) => {
          return (
            <div className={style.main2}>
              <label>
                {item.name} {item.package} ,{item.placed}
              </label>
              <p>
                {item.company}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
