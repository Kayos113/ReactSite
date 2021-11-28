import React from "react";
import PortfolioCard from "./comps/PortfolioCard";
import cardInfo from "./portfolioInfo";
import "./Portfolio.css"

function Portfolio() {
  return (
    <div className="display-div">
      <h1>Portfolio</h1>
      {cardInfo.map(entry=>(<PortfolioCard
        title={entry.title}
        text={entry.text}
        url={entry.url}
        linkText={entry.linkText}/>))}
    </div>
  );
}

export default Portfolio;
