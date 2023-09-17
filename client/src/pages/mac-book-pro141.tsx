"use-client";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import InfoBox from "../components/info-box";
import {Recorder} from "../components/Recorder";
import React, {useState} from "react";

const MacBookPro141: NextPage = () => {
  const [audioInput, setAudioInput] = useState("");

  return (
    <div className="relative [background:linear-gradient(#181818,_#181818),_#fff] w-full h-[61.38rem] overflow-hidden text-left text-[1.5rem] text-white font-manrope">
<div
  className="absolute top-[10.19rem] left-[21.88rem] rounded-[64px] bg-firebrick shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[50.81rem] h-[30.81rem]"
  id="response-card"
>
  <img
    className="absolute top-[2.13rem] left-[1.94rem] rounded-[50%] w-[9.5rem] h-[9.5rem] object-cover"
    loading="eager"
    id="profile-picture-text-card"
    alt=""
    src="/profile-picture-text-card@2x.png"
  />
  <p
    className="m-0 absolute top-[2.13rem] left-[12.69rem] inline-block w-[35.13rem] h-[26.25rem]"
    id="response"
  >
    <span className="block">{`¡Hola! Soy Pablo Picasso, nacido en Málaga, España. Soy conocido principalmente por mi contribución al arte moderno y por ser uno de los fundadores del movimiento cubista. `}</span>
    <span className="block">&nbsp;</span>
    <span className="block">
      Aunque mi vida ha estado sumergida en colores, pinceles y lienzos,
      siempre he encontrado un especial placer en la comida española. La
      gastronomía de mi tierra tiene un encanto único y me recuerda a los
      días de mi infancia en Andalucía.
    </span>
  </p>
</div>
<img
  className="absolute top-[3.88rem] left-[8rem] w-[78.94rem] h-[4rem] overflow-hidden"
  alt=""
  src="/frame.svg"
/>
<div className="absolute top-[43.25rem] left-[21.88rem] rounded-794xl bg-darkslategray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[50.81rem] h-[14.13rem] overflow-hidden text-[2rem]">
  <button
    className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.56rem] left-[2.19rem] w-[9rem] h-[9rem] overflow-hidden"
    id="delete"
  >
    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-darkgray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[9rem] h-[9rem]" />
    <img
      className="absolute top-[2.25rem] left-[2.25rem] w-[4.5rem] h-[4.5rem] object-cover"
      alt="delete"
      loading="eager"
      id="delete"
      src="/542724-1@2x.png"
    />
  </button>
  {/* <button
    className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.56rem] left-[38.81rem] w-[9rem] h-[9rem] overflow-hidden"
    id="voice-button"
  >
    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-firebrick shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[9rem] h-[9rem]" />
    <button>
      <img
        className="absolute top-[2.25rem] left-[2.25rem] w-[4.5rem] h-[4.5rem] object-cover"
        alt="microphone"
        loading="eager"
        id="microphone"
        src="/microphone8xxl-1@2x.png"
      />
    </button>
  </button> */}

  <div className="absolute top-[0rem] left-[14.44rem] w-[23.38rem] h-[14.13rem] overflow-hidden">
    <div className="absolute top-[2.88rem] left-[0rem] w-[23.38rem] h-[11.25rem] overflow-hidden">
      <div className="absolute top-[0rem] left-[0rem] whitespace-pre-wrap inline-block w-[23.38rem] h-[11.25rem]">
        <p className="m-0">{`Talk with `}</p>
        <p className="m-0">in                                 about</p>
      </div>
      <input
        className="[border:none] bg-firebrick absolute top-[0rem] left-[8.88rem] rounded-18xl w-[12.75rem] h-[2.31rem]"
        name="person"
        id="person"
        value="Pablo Picasso"
        placeholder="Pablo Picasso"
        type="text"
      />
      <input
        className="[border:none] bg-firebrick absolute top-[6rem] left-[0rem] rounded-18xl w-[21.63rem] h-[2.31rem]"
        id="topic"
        value="his favorite food"
        placeholder="his favorite food"
        type="text"
      />
      <input
        className="[border:none] bg-firebrick absolute top-[3rem] left-[2.5rem] rounded-18xl w-[11.38rem] h-[2.31rem]"
        name="language"
        id="language"
        value="Spanish"
        placeholder="Spanish"
        type="text"
      />
    </div>
  </div>
</div>
</div>
  );
};

export default MacBookPro141;