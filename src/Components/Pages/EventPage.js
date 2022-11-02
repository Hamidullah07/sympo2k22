import React from "react";
import { TechPageItems } from "./TechPageItems";
import { Link, useParams } from "react-router-dom";
import "./EventPage.css";

function EventPage(props) {
  const params = useParams();
  console.log("Params", params);
  console.log("data", TechPageItems);

  const event = TechPageItems.find((x) => x.id == params.id);
  console.log("Event", event);

  return (
    <div>
      <div className="page_container">
        <h3 className="page_heading">{event.heading} </h3>
        <div className="page_container_img">
          {/* <img src={event.img} alt={event.heading}></img> */}
        </div>
        <div className="info">
          <h4 style={{float:'right'}}>Venue : {event.venue}</h4>
          <h4 > Rules & Regulations : </h4>
          <ol>
            {event.rules.map(items => {
              return <li >{items}</li>;
            })}
          </ol>
          <p>Timing : {event.timing}</p>
          <p>Registration Link :<Link to={event.reg_link}>Click</Link></p>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
