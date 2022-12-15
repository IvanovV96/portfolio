import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const allData = [
  {
    id: 1,
    name: "Movie Finder",
    category: ["creative"],
    image: "images/portfolio/movie_finder.jpg",
    url: "https://ivanovv96.github.io/goit-react-hw-05-movies/",
    slug: "movie_finder",
  },
  {
    id: 2,
    name: "Image Finder",
    category: ["creative", "design"],
    url: "https://ivanovv96.github.io/goit-react-hw-04-images/",
    image: "images/portfolio/img_finder.jpg",
    slug: "filmoteka",
  },
  {
    id: 3,
    name: "Phonebook",
    category: ["branding"],
    url: "https://ivanovv96.github.io/goit-react-hw-08-phonebook/",
    image: "images/portfolio/phonebook.jpg",
    slug: "phonebook",
  },
  {
    id: 4,
    name: "Web Studio",
    category: ["creative"],
    url: "https://ivanovv96.github.io/goit-markup-hw-08/",
    image: "images/portfolio/web_studio.jpg",
    slug: "web-studio",
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems);
  }, [getAllItems]);

  return (
    <>
      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-3 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

    </>
  );
}

export default Portfolios;
