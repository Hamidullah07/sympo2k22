import React from "react";
import { TechPageItems } from "../Pages/TechPageItems";
import ClgLogo from '../../Assets/clg_logo.jpg';
import Footer from "../Footer/Footer";
// import MaveLogo from '../../Assets/Mave_logo.jpg';
import "./Home.css";

function Home() {
  return (
    <div>
      <section className="content">
      {/* <img className="mave_logo" src={MaveLogo}></img> */}
        <div className="title">
          <img className="clg_logo" style={{width:'15rem',height:'15rem'}} src={ClgLogo}></img>
          <h1>Department of Master of Computer Applications</h1>
          <h4>Presents</h4>
          <h1>Mavericks 2K22</h1>
          <h4>November 18</h4>
        </div>
      </section>

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
      <Footer/>
    </div>
  );
}

export default Home;
