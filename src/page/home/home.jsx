import React from "react";
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Rukn } from "./rukn/rukn";
import { New } from "./new/new";
import { AudioBook } from "./audioBook/audioBook";
export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Rukn />
      <New/>
      <AudioBook/>
    </>
  );
};
