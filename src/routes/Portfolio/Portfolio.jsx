import React from "react";
import PortfolioCard from "./comps/PortfolioCard";
import cardInfo from "./portfolioInfo";

function Portfolio() {
  return (
    <div>
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
