import React, { use, useEffect, useState } from "react";
import Header from "./header";
import Message from "./Message";
import Profile from "./profile";
import InputForm from "./input-form";
import GoButton from "./go-button";
import { Recorder } from "./Recorder";
import { useSocket, useSocketEvent } from "socket.io-react-hook";
import useSound from "use-sound";

interface ConverstaionParams {
  language: "en-US" | "es-SP";
  person: string;
  topic: string;
}

export interface HistoricMessage {
  author: "user" | "chatbot";
  content: string;
  language: string;
  asAudio: string;
}

const Conversation = () => {
  const [params, setParams] = useState<null | ConverstaionParams>({
    language: "es-SP",
    person: "Pablo Picasso",
    topic: "his favorite food",
  });
  const [latestVoiceRecording, setLatestVoiceRecording] = useState("");
  const [messagesHistory, setMessagesHistory] = useState<HistoricMessage[]>([]);
  const [convoStarted, setConvoStarted] = useState(false);
  const [promptState, setPromptState] = useState<
    "pending-user-message" | "sending-response"
  >("pending-user-message");

  const [latestIncomingSound, setLatestIncomingSound] = useState("");
  const [play] = useSound(latestIncomingSound);

  const [inited, setInited] = useState(false);
  const { socket, error, connected } = useSocket("http://localhost:4000", {
    reconnection: true,
    transports: ["websocket"],
  });
  console.log(error);
  const { sendMessage: sendHandshakeInfo } = useSocketEvent(
    socket,
    "handshake"
  );

  const { lastMessage: initialMessage } = useSocketEvent(
    socket,
    "initial_bot_message",
    {
      onMessage: (message: HistoricMessage) => {
        setMessagesHistory((prev) => [...prev, message]);
      },
    }
  );

  const { sendMessage: sendNewPromptMessage } = useSocketEvent(
    socket,
    "new_prompt_message"
  );

  const { lastMessage } = useSocketEvent(socket, "new_prompt_response", {
    onMessage: (message: { promptResponse: HistoricMessage }) => {
      console.log(message);
      //   const hMsg = message.promptResponse;
      //   setMessagesHistory((prev) => [...prev, hMsg]);
    },
  });

//   const { lastMessage: latestUserTranscription } = useSocketEvent(
//     socket,
//     "transcribe_latest_message",
//     {
//       onMessage: (message: { latestMessageAsText: string }) => {
//         messagesHistory.push({
//           asAudio: latestVoiceRecording,
//           author: "user",
//           content: message.latestMessageAsText,
//           language: params?.language || "",
//         });
//       },
//     }
//   );

  useEffect(() => {
    if (connected) {
      if (!inited) {
        console.log("SOCKET INITIATED");
        sendHandshakeInfo(params);
        setInited(true);
      }
    } else {
      if (socket?.connect) socket.connect();
    }
  }, [socket, connected]);

  useEffect(() => {
    if (connected && inited && latestVoiceRecording !== "") {
      sendNewPromptMessage({ base64Audio: latestVoiceRecording });
      setLatestVoiceRecording("");
    }
  }, [latestVoiceRecording]);

  useEffect(() => {
    if (
      lastMessage?.promptResponse?.asAudio &&
      lastMessage?.promptResponse.author == "chatbot"
    ) {
      setLatestIncomingSound(lastMessage.promptResponse.asAudio);
      play();
    } else {
      console.log("No message to play");
    }
  }, [messagesHistory]);

  return (
    <div className="[background:linear-gradient(#181818,_#181818),_#fff] h-[100vh] text-center text-[2rem] justify-between flex flex-row text-white font-manrope">
      <div className="flex flex-col justify-between p-10 overflow-hidden">
        <Header />
        <h3
          className="text-inherit font-light font-inherit inline-block  [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          id="waiting-response"
        >
          {messagesHistory.length == 0
            ? "Talk with someone historical and their response will go here."
            : messagesHistory.map((msg) => <Message msg={msg} />)}
        </h3>
        <section
          className="flex items-center justify-center px-10 rounded-794xl bg-darkslategray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden text-left text-[2rem] text-white font-manrope"
          id="info-card"
        >
          <div className="flex items-center justify-between w-full gap-3 py-8">
            <Profile />
            <InputForm />
            {convoStarted ? (
              <Recorder
                onRecorded={async (data: string) => {
                  console.log(data);
                  setLatestVoiceRecording(data);
                }}
              />
            ) : (
              <GoButton
                onClick={() => {
                  setConvoStarted(true);
                }}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Conversation;
