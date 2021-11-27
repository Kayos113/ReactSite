import React from "react";

function PortfolioCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href={props.url}>{props.linkText}</a>
    </div>
  );
}

export default PortfolioCard;
