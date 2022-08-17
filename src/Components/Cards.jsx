import React from "react";
import "./Card.css";
const Cards = (props) => {
  return (
    <div className="">
      <div className="card ">
        <h5>{props.heading}</h5>
        <div className="img-card">
          <img src={props.images} alt="article images" className="new-img" />
        </div>
        <article>{props.content}</article>
        <span>
          <a href={props.readurl}>Read more</a>
        </span>
        <p>{props.desc}</p>
        <span style={{ fontWeight: "bold" }}>Author: {props.author}</span>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default Cards;
