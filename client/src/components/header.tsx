import type { NextPage } from "next";
import LanguageDropdown from "./LanguageDropdown";

const Header: NextPage = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-5 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[18.05rem] h-[4rem]">
        <img
          className="w-[12.38rem] h-[2.67rem]"
          alt="historic"
          loading="eager"
          id="historic-logo"
          height={43}
          width={198}
          src="/historic-logo.svg"
        />
        <img
          className="w-[4rem] h-[4rem]"
          alt="icon"
          id="icon"
          src="/icon-historic.svg"
        />
      </div>
      <LanguageDropdown />
    </div>
  );
};

export default Header;
