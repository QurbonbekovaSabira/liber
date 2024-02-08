import React from "react";
import { newData } from "../../../data/newData";
import { CardMain } from "../../../components/card-main/card-main";
export const New = () => {
  return (
    <section>
      <div className="container">
        <h2 className="mb-[32px] text-4xl font-semibold">Янги қўшилганлар</h2>
        <div className="flex gap-[24px]">
          {newData.map((item) => (
            <CardMain key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
