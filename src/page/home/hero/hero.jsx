import React from "react";
import { HeroHome } from "../components/hero-home";
export const Hero = () => {
  return (
    <section className="pb-[56px]">
      <div className="mb-[16px]  mt-[11px]  border-spacing-y-1  border border-grey  py-[10px]">
        <div className="container flex gap-[16px]">
          <a href="#" className="text-base font-semibold text-primary">
            Аудиокитоб
          </a>
          <a href="#" className="text-base font-semibold text-primary">
            Электрон китоблар
          </a>
          <a href="#" className="text-base font-semibold text-primary">
            Босма китоблар
          </a>
          <a href="#" className="text-base font-semibold text-primary">
            Контакт
          </a>
          <a href="#" className="text-base font-semibold text-primary">
            Биз хақимизда
          </a>
        </div>
      </div>
      <div className="container">
        <HeroHome />
      </div>
    </section>
  );
};
