import { useVoiceRecorder } from "@/hooks/useRecorder";
import { FaMicrophone } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

export const Recorder: React.FC<{
  onRecorded: (data: string) => void;
}> = ({ onRecorded }) => {
  const { isRecording, stop, start } = useVoiceRecorder(onRecorded);
  return (
    <button
      className="cursor-pointer w-[100px] h-[100px] flex justify-center items-center bg-firebrick rounded-full [border:none] p-0 overflow-hidden"
      id="go-button"
      onClick={() => {
        console.log("RECORDING TOUCHED");
        if (isRecording) {
          stop();
        }
        start();
      }}
    >
      <p>{isRecording ? <BsThreeDots /> : <FaMicrophone />}</p>
    </button>
    // <button
    //   className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.56rem] left-[38.81rem] w-[9rem] h-[9rem] overflow-hidden"
    //   id="voice-button" onClick={isRecording ? stop : start}>
    //   <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-firebrick shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[9rem] h-[9rem]" />
    //     <img
    //       className="absolute top-[2.25rem] left-[2.25rem] w-[4.5rem] h-[4.5rem] object-cover"
    //       alt="microphone"
    //       loading="eager"
    //       id="microphone"
    //       src={isRecording ?  "/whitedots.svg" : "/microphone8xxl-1@2x.png"}
    //     />
    // </button>
    // <div>
    //   <div>On air: {isRecording ? "on" : "off"}</div>
    //   <button onClick={start}>Start</button>
    //   <button onClick={stop}>Stop</button>
    // </div>
  );
};
