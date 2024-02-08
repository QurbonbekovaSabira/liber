import React from "react";
import { aboutData } from "../../../data/about-data";
import { Card } from "../components/card-home/card";
export const About = () => {
  return (
    <section className="pb-[40px]">
      <div className="container flex ">
        {aboutData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
