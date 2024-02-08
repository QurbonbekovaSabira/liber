import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
export const MainLayout = ({ children }) => {
  return (
    <>
      <header className="py-[22px]">
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
