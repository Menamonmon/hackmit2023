import { Server, Socket } from "socket.io";
import { Chatbot } from "./prompt/Chatbot";
import { speechToText } from "./utils/s2t";
import { convertTextToSpeech } from "./utils/tts";

interface InitiationParams {
  language: string;
  person: string;
  topic: string;
}

interface ChatbotSocket extends Socket {
  chatbot: Chatbot | undefined;
}

interface HistoricMessage {
  author: "user" | "chatbot";
  content: string;
  language: string;
  asAudio: string;
}

export const attachSocketLogic = (io: Server) => {
  io.on("connection", (sock) => {
    let socket = sock as ChatbotSocket;

    // Initialize the chatgpt client
    socket.on("handshake", (params: InitiationParams) => {
      const { language, person, topic } = params;
      socket.chatbot = new Chatbot(language, person, topic);
    });

    socket.on(
      "new_prompt_message",
      async ({ base64Audio }: { base64Audio: string }) => {
        if (!socket.chatbot) {
          throw Error("No chatbot is deteced with this socket");
        }
        const fullLanguage = socket.chatbot.language;
        const text = await speechToText(
          base64Audio,
          fullLanguage.split("-")[0]
        );
        console.log(text);

        const hMessage: HistoricMessage = {
          asAudio: "",
          author: "user",
          content: text,
          language: fullLanguage,
        };

        await socket.chatbot.setUserMessage(text);
        const responseText = socket.chatbot.getChatbotResponse();

        console.log(responseText);
        if (!responseText) {
          throw Error("INVALID RESPONSE TEXT!!!!");
        }

        const responseAudio = await convertTextToSpeech(
          responseText,
          fullLanguage,
          socket.chatbot.personProfile
        );

        if (!responseAudio) {
          throw Error("Something wrong happened with response audio");
        }

        const returnHMessage: HistoricMessage = {
          asAudio: responseAudio,
          author: "chatbot",
          content: responseText,
          language: fullLanguage,
        };
        socket.emit("new_prompt_response", { promptResponse: returnHMessage });
      }
    );

    socket.on("disconnect", () => {
      console.log("SOCKET DISCONNECTED");
    });
  });
};
