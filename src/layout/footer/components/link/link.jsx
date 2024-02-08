import React from "react";
import { InstagramIcon } from "../../../../assets/icon/instagram-icon";
import { TikTokIcon } from "../../../../assets/icon/tikTok-icon";
import { YouTubeIcon } from "../../../../assets/icon/you-tube-icon";
import { FacebookIcon } from "../../../../assets/icon/facebook-icon";
import { TelegramIcon } from "../../../../assets/icon/telegram-icon";

export const Link = () => {
  return (
    <div className="flex gap-[26px] items-center">
      <a href="#" className="text-white hover:text-grey">
        <FacebookIcon />
      </a>
      <a href="#" className="text-white hover:text-grey">
        <YouTubeIcon />
      </a>
      <a href="#" className="text-white hover:text-grey">
        <TikTokIcon />
      </a>
      <a href="#" className="text-white hover:text-grey">
        <TelegramIcon />
      </a>
      <a href="#" className="text-white hover:text-grey">
        <InstagramIcon />
      </a>
    </div>
  );
};
