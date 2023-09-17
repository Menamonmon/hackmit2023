"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { BsArrowRightCircleFill } from "react-icons/bs";

const GoButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const router = useRouter();

  return (
    <button
      className="cursor-pointer w-[100px] h-[100px] flex justify-center items-center bg-firebrick rounded-full [border:none] p-0 overflow-hidden"
      id="go-button"
      onClick={onClick}
    >
      <p>
        <BsArrowRightCircleFill />
      </p>
    </button>
  );
};

export default GoButton;
