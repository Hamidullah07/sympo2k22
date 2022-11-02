import React from 'react'
import { TechItems } from '../Items/TechnicalItems';
import './Technical.css';

function Technical () {
  return (
    <div className="tech_item">
    <h1>Technical Events</h1>
    <ul>
      {TechItems.map((item) => {
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
  )
}

export default Technical 