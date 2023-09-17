import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import InfoBox from "../components/info-box";
import { Recorder } from "../components/Recorder";

const MacBookPro142: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(#181818,_#181818),_#fff] w-full h-[61.38rem] overflow-hidden text-center text-[2rem] text-white font-manrope">
      <h3
        className="m-0 absolute top-[calc(50%_-_66px)] left-[calc(50%_-_227px)] text-inherit font-light font-inherit inline-block w-[28.38rem] h-[8.25rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        id="waiting-response"
      >
        Talk with someone historical and their response will go here.
      </h3>
      <div className="absolute top-[3.88rem] left-[8rem] w-[78.94rem] h-[53.5rem] overflow-hidden">
        <Header />
        <InfoBox />
      </div>
    </div>
  );
};

export default MacBookPro142;
