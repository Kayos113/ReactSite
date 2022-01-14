import React from "react";

function PortfolioCard(props) {
  return (
    <div className="portfolio-card">
      <h1 className="card-title">{props.title}</h1>
      <p className="card-text">{props.text}</p>
      <a href={props.url} className="card-link" target="_blank">{props.linkText}</a>
    </div>
  );
}

export default PortfolioCard;
