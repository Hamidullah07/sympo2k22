import React from "react";
import { SportsItems } from "../Items/SportsItem";

function Sports() {
  return (
    <div>
      <div className="tech_item">
        <h1>Sports Events</h1>
        <ul>
          {SportsItems.map((item) => {
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

export default Sports;
