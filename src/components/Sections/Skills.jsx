import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  progressData: [
    {
      id: 1,
      name: "HTML & CSS",
      percentage: 85,
    },
    {
      id: 2,
      name: "JavaScript",
      percentage: 70,
    },
    {
      id: 3,
      name: "React/Redux",
      percentage: 65,
    },
    {
      id: 4,
      name: "GIT",
      percentage: 55,
    },
  ],
};

function Skills() {
  return (
    <>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
