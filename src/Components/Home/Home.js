import React from "react";
import { TechItems } from "../Items/TechnicalItems";
import { NonTechItems } from "../Items/NonTechItems";
import { SportsItems } from "../Items/SportsItem";
import ClgLogo from '../../Assets/clg_logo.jpg';
// import MaveLogo from '../../Assets/Mave_logo.jpg';
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="content">
        <div className="title">
          {/* <img className="mave_logo" src={MaveLogo}></img> */}
          <img src={ClgLogo}></img>
          <h1>Welcome To Mavericks 2K22</h1>
          <h1>November 18</h1>
        </div>
      </section>

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

export default Home;
