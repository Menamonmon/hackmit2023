import type { NextPage } from "next";

const InputForm: NextPage = () => {
  return (
    <div className="flex overflow-hidden text-left text-[1.5rem] text-white font-manrope">
      <div className="whitespace-pre-wrap inline-block">
        <p className="m-0 inline">{`Talk with `}</p>
        <input
          className="mx-2 inline [border:none] bg-firebrick  rounded-18xl cursor-text text-[white] pl-[1rem] text-[1.35rem]"
          name="person"
          id="person"
          value="Pablo Picasso"
          placeholder=""
          type="text"
        />
        <p className="m-0 inline">in</p>
        <input
          className="mx-2 inline [border:none] bg-firebrick  rounded-18xl  cursor-text text-[white] pl-[1rem] text-[1.35rem]"
          name="language"
          id="language"
          value="Spanish"
          placeholder=""
          type="text"
        />
        <p className="inline">about</p>
        <input
          className="mx-2 inline [border:none] bg-firebrick rounded-18xl  cursor-text text-[white] pl-[1rem] text-[1.35rem]"
          name="topic"
          id="topic"
          value="his favorite food"
          placeholder=""
          type="text"
        />
      </div>
    </div>
  );
};

export default InputForm;
