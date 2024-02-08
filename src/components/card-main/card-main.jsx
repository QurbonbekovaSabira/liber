import React from "react";

export const CardMain = ({
  text,
  desc,
  img,
  rating,
  headphone: Headphone,
  bookIcon: BookIcon,
}) => {
  return (
    <div>
      <div className="mb-[18px]">
        <img src={img} alt={text} />
      </div>
      <div>
        <p className="text-darkPurple mb-[5px] text-xl font-bold">{text}</p>
        <p className="text-primary mb-[19px] text-sm font-normal">{desc}</p>
        <div className="flex items-center justify-between">
          <img src={rating} alt={text} />
          <div className="flex gap-[16px]">
            <Headphone />
            {BookIcon ? <BookIcon /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
