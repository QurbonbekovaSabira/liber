import React from "react";
import { SelectMenuIcon } from "../../../../assets/icon/selectMenu-icon";
import { SelectArrowIcon } from "../../../../assets/icon/selectArrow-icon";
export const Select = () => {
  return (
    <div className="border-grey bg-grey relative w-full max-w-[180px] overflow-hidden rounded-l-lg border border-solid">
      <a href="#" className="absolute left-[26px] top-[14px] mr-[5px]">
        <SelectMenuIcon />
      </a>
      <select className="text-primary block w-full appearance-none border-none py-[12px] pl-[60px] pr-[50px] text-base font-semibold outline-none">
        <option defaultValue="Рукнлар">Рукнлар</option>
      </select>
      <a href="#" className="absolute right-[19px] top-[22px]">
        <SelectArrowIcon />
      </a>
    </div>
  );
};
