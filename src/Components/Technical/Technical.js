import React from 'react'
import { TechPageItems } from '../Pages/TechPageItems';
import './Technical.css';

function Technical () {
  return (
    <div className="tech_item">
    <h1>Technical Events</h1>
    <ul>
          {TechPageItems.map((item) => {
            if(item.id <6)
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
  )
}

export default Technical 