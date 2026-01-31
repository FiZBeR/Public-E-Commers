import React from "react";
import Nav from "./Nav";
import More from "./More";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6ebe8] bg-background-light/95 backdrop-blur-sm ">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo/>
        <Nav/>
        <More/>
      </div>
    </header>
  );
};

export default Header;
