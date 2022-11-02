import React from "react";
import { TechPageItems } from "../Pages/TechPageItems";
import './NonTech.css';

function NonTech() {
  return (
    <div>
      <div className="tech_item">
        <h1>Non-Technical Events</h1>
        <ul>
          {TechPageItems.map((item) => {
            if(item.id <11 && item.id >5)
            {
              return (
                <li>
                  <a href={"/eventPage/"+item.id}>
                    <img key={item.id} src={item.img} alt=""></img>
                    <p>{item.heading}</p>
                  </a>
                </li>
              );
            }
            }
)}
        </ul>
      </div>
    </div>
  );
}

export default NonTech;
