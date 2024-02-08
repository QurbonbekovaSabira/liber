import React from "react";
import img1 from "../../../assets/img/googleplay.png";
import img2 from "../../../assets/img/appstore.png";

export const FooterFirst = () => {
  return (
    <div className="bg-secondary pb-[63px] pt-[33px] ">
     <div className="container flex gap-[144px]">
     <div>
        <p className="mb-[17px] text-xl font-bold">Платформа хақида</p>
        <p className="mb-[18px] text-lg font-normal">Liber ўзи нима?</p>
        <p className="mb-[18px] text-lg font-normal">Фойдаланиш шартлари</p>
        <p className=" text-lg font-normal">Ёрдам</p>
      </div>
      <div>
        <p className="mb-[17px] text-xl font-bold">Обуна хақида</p>
        <p className="mb-[18px] text-lg font-normal">Фойдаланиш шартлари</p>
        <p className=" text-lg font-normal">Қандай тўлаш</p>
      </div>
      <div>
        <p className="mb-[17px] text-xl font-bold"> Китоблар</p>
        <p className="mb-[18px] text-lg font-normal">Аудио китоблар</p>
        <p className="mb-[18px] text-lg font-normal"> </p>
        <p className=" text-lg font-normal">Китоблар</p>
      </div>
      <div>
        <p className="mb-[17px] text-xl font-bold">Мобил илова</p>
        <img className="mb-[17px]" src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
     </div>
    </div>
  );
};
