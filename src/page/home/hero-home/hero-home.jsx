import React from "react";
import { BannersHome } from "../components/banners-home";
import { BannersIcon } from "../../../assets/icon/banners-icon";
import { Button } from "../../../components/button/button";
import { HeartIcon } from "../../../assets/icon/heart-icon";
import bg from "../../../assets/img/home-card.png";
export const HeroHome = () => {
  return (
    <div className="flex items-start gap-[24px] ">
      <div className="bg-secondary flex justify-between overflow-hidden  gap-[50px] rounded-xl pb-[15px] pr-[72px] pt-[32px]">
        <div>
          <p className="text-darkPurple ml-[32px] text-2xl font-bold">
            Кўп ўқилаётганлар
          </p>
          <div className="translate-y-4">
            <BannersIcon />
          </div>
        </div>
        <BannersHome />
      </div>
      <div className="bg-primary max-w-[261px] grow rounded-xl  bg-[url(../../../assets/img/home-card.png)] p-[24px]">
        <p className="mb-[26px] text-lg font-bold text-white">
          Китоб ўқишни ёқтирасизми?
        </p>
        <p className=" mb-[77px] rounded-xl  text-base font-normal text-white">
          Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
        </p>
        <Button
          icon={HeartIcon}
          type="button"
          variant="white"
          className="mb-[36px]"
        >
          Обуна бўлиш
        </Button>
      </div>
    </div>
  );
};
