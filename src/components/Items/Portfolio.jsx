import React from "react";

function Portfolio({ portfolio: { name, image, url } }) {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
        </div>
        <div className="thumb">
          <img src={image} alt={name} />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
