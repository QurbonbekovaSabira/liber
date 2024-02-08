import React from "react";
import { CardMain } from "../../../components/card-main/card-main";
import { audioBook } from "../../../data/audioBook-data";
export const AudioBook = () => {
  return (
    <section className="pt-[66px] pb-[93px]">
      <div className="container">
        <h2 className="mb-[32px] text-4xl font-semibold">Янги қўшилганлар</h2>
        <div className="flex gap-[26px]">
          {audioBook.map((item) => (
            <CardMain key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
