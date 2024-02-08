import React from 'react'
import img1 from "../../../../assets/img/uzcard.png";
import img2 from "../../../../assets/img/payme.svg";
import img3 from "../../../../assets/img/humo.png";

export const PlasticCard = () => {
  return (
    <div className="flex gap-[8px] items-center">
    <img src={img1} alt="card" />
    <img src={img3} alt="card" />
    <img src={img2} alt="card" />
  </div>
  )
}
