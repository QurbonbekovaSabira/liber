import React from "react";
import { FlagUzIcon } from "../../../../assets/icon/flagUz-icon";
import { FlagRu } from "../../../../assets/icon/flagRu";
export const Lang = () => {
  const [flag, setFlag] = React.useState("Uz");
  function ChangeFlag(e) {
    let name = e.target.value;
    if (name === "Uz") {
      setFlag("Uz");
    } else {
      setFlag("Ru");
    }
  }

  return (
    <div className="bg-secondary relative flex max-w-[105px] grow overflow-hidden rounded-[14px]">
      <a href="#" className="absolute left-3 top-3">
        {flag == "Uz" ? <FlagUzIcon /> : <FlagRu />}
      </a>
      <select
        onChange={ChangeFlag}
        className="bg-secondary text-primary ml-2 mr-1 block w-full pl-[30px] text-base font-semibold outline-none"
      >
        <option defaultValue value="Uz">
          Uz
        </option>
        <option value="Ru">Ru</option>
      </select>
    </div>
  );
};
