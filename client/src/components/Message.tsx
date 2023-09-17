import React from "react";
import { HistoricMessage } from "./Conversation";

const Message: React.FC<{ msg: HistoricMessage }> = ({
  msg: { asAudio, author, content, language },
}) => {
  return <div>{content}</div>;
};

export default Message;
