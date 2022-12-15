import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const languagesData = {
  progressData: [
    {
      id: 1,
      name: "Ukrainian(native speaker)",
      percentage: 100,
    },
    {
      id: 2,
      name: "English(Pre-Intermediate)",
      percentage: 65,
    },
  ],
};

function Languages() {
  return (
    <>
      <div className="mt-5">
        <div className="row -mt-50">
          {languagesData.progressData.map((progress) => (
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

export default Languages;
