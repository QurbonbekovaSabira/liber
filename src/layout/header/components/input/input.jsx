import React from "react";
import { SearchIcon } from "../../../../assets/icon/search-icon";

export const Input = () => {
  return (
    <div className="flex-grow-1 grow border-grey bg-snow flex w-full max-w-[555px] rounded-r-lg border border-solid">
      <input
        className="border-grey text-primary placeholder:text-grey w-[90%] border-r bg-transparent px-[29px] text-base font-normal outline-none"
        type="text "
        placeholder="Қидириш"
      />
      <button className=" m-auto max-w-[10%]">
        <SearchIcon />
      </button>
    </div>
  );
};
