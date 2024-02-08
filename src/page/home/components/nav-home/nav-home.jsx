import React from "react";
import { rukunlarData } from "../../../../data/rukunlar-data";
export const NavHome = () => {
  return (
    <div className="flex gap-[16px]">
      {rukunlarData.map((item) => (
        <div key={item.id} className="relative cursor-pointer">
          <img className="w-full" src={item.img} alt={item.text} />
          <p className="absolute bottom-[17px] left-[17px] text-lg font-semibold text-white">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};
