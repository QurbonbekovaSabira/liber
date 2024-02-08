import React from "react";
import { bannerData } from "../../../../data/banners-data";

export const BannersHome = () => {
  return (
    <div className=" flex">
      {bannerData.map((item) => (
        <div className="gap-1" key={item.id}>
          <img src={item.img} alt={item.text} />
          <p className="text-center text-lg font-normal">{item.text}</p>
        </div>
      ))}
    </div>
  );
};
