import React from "react";

const LanguageDropdown: React.FC<> = ({}) => {
  return (
    <button className="[border:none] flex justify-center items-center gap-5 p-0 bg-darkslategray rounded-109xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[8rem] h-[4rem]">
      <img
        className="w-[1.63rem] h-[1.63rem] object-cover"
        loading="eager"
        id="dropdown"
        alt=""
        src="/dropdownarrowiconrounded-1@2x.png"
      />
      <img
        className="w-[2.25rem] h-[2.25rem] object-cover"
        alt=""
        src="/551953-1@2x.png"
      />
    </button>
  );
};

export default LanguageDropdown;
