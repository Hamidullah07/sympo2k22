import React from "react";
import { NonTechItems } from "../Items/NonTechItems";
import './NonTech.css';

function NonTech() {
  return (
    <div>
      <div className="tech_item">
        <h1>Non-Technical Events</h1>
        <ul>
          {NonTechItems.map((item) => {
            return (
              <li>
                <a href="">
                  <img key={item.id} src={item.img} alt=""></img>
                  <p>{item.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NonTech;
