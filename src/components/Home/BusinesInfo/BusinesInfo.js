import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const infosData = [
  {
    title: "Opening Hours",
    description: "We are open 7 Days",
    icon: faClock,
    background: "dark",
  },
  {
    title: "Visite Our Location",
    description: "Brooklyn NY 10003 USA",
    icon: faMapMarkerAlt,
    background: "primary",
  },
  {
    title: "Call us now",
    description: "+15697854124",
    icon: faPhoneAlt,
    background: "dark",
  },
];

const BusinesInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row ">
        {infosData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinesInfo;
