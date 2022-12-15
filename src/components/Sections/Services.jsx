import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Strategic thinking",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Quick learning",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Multitasking",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "Decision making",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Critical thinking",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Communicative",
    icon: "icon-bubbles",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
