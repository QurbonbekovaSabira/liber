import React from "react";
import logo from "../../assets/img/logo.svg";
import { BoxSelect } from "./components/box-select";
import { LangSelectBox } from "./components/lang-selectBox";

export const Header = () => {
  return (
    <div className="container flex items-center gap-[50px]">
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <BoxSelect />
      <LangSelectBox />
    </div>
  );
};
