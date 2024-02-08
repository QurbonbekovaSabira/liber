import React from "react";

export const Card = ({ img: Icon, text, title }) => {
  return (
    <div className="flex items-center gap-[20px] p-[26px]">
      <div className="grow">
        <Icon />
      </div>
      <div>
        <p className="mb-[16px] text-base font-bold">{title}</p>
        <p className="text-grey text-xs font-normal">{text}</p>
      </div>
    </div>
  );
};
