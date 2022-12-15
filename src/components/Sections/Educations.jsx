import React from "react";
import Education from "../Items/Education";

const educationData = [
  {
    id: 1,
    year: "2019 - Present",
    degree: "GoIT University",
  },
  {
    id: 2,
    year: "2017 - 2018",
    degree: "Master’s Degree",
    content:
      "National University of Water Management and Nature Resources Use, Water Supply and Water Disposal faculty",
  },
  {
    id: 3,
    year: "2013 - 2017",
    degree: "Bachelor’s Degree",
    content:
      "National University of Water Management and Nature Resources Use, Water Supply and Water Disposal faculty",
  },
];

function Educations() {
  return (
    <div className="timeline">
      {educationData.map((education) => (
        <Education education={education} key={education.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Educations;
