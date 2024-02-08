import React from "react";
import { PlasticCard } from "../components/plasticCard/plasticCard";
import { Link } from "../components/link/link";
export const FooterSecond = () => {
  return (
    <div className="bg-blackDarkGray py-[20px]">
      <div className="container flex items-center gap-[100px]">
        <div>
          <p className="mb-[12px] text-lg font-light text-white">
            Ижтимоий тармоқлар
          </p>
          <Link />
        </div>
        <div>
          <p className="mb-[11px] text-lg font-light text-white">Боғланиш</p>
          <div className="flex gap-[23px]">
            <a
              className="text-base font-light text-white"
              href="tel:+998 90 253 77 53"
            >
              +998 90 253 77 53
            </a>
            <a
              className="text-base font-light text-white"
              href="mail:support@liber.uz"
            >
              support@liber.uz
            </a>
          </div>
        </div>
        <div>
          <p className="mb-[12px] text-lg font-light text-white">
            Биз қабул қиламиз
          </p>
          <PlasticCard />
        </div>
      </div>
    </div>
  );
};
