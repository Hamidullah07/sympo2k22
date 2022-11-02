import React from "react";
import { TechPageItems } from "../Pages/TechPageItems";

function Sports() {
  return (
    <div>
      <div className="tech_item">
        <h1>Sports Events</h1>
        <ul>
          {TechPageItems.map((item) => {
            if(item.id >10 && item.id <16)
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

export default Sports;
