import React from "react";
import Education from "../Items/Education";

const experienceData = [
  {
    id: 1,
    year: "2020 - Present",
    degree: "VPK Ukraine",
    content: "Sales manager",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experienceData.map((experience) => (
        <Education education={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
