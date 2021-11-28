import React from "react";
import "./PortfolioCard.css";

function PortfolioCard(props) {
  return (
    <div className="card-div">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.url}>{props.linkText}</a>
    </div>
  );
}

export default PortfolioCard;
