import OpenAI from "openai";
import * as dotenv from "dotenv";
import { response } from "express";

dotenv.config();

export interface PersonProfile {
  ssmlGender: "MALE" | "FEMALE";
  name: string;
}

const characters: Record<string, PersonProfile> = {
  "Pablo Picasso": { ssmlGender: "MALE", name: "es-ES-Wavenet-B" },
  "Simon Bolivar": { ssmlGender: "MALE", name: "es-ES-Polyglot-1" },
  "Frida Khalo": { ssmlGender: "FEMALE", name: "es-ES-Neural2-E	" },
};

const topicCharacterToGoogleTextToSpeechParams = (person: string) => {
  return {};
};

export class Chatbot {
  language: string;
  person: string;
  topic: string;
  messages: OpenAI.Chat.ChatCompletionMessageParam[];
  openai: OpenAI;
  lastResponse: string | null = null;
  personProfile: PersonProfile;
  initMessage: string;

  constructor(language: string, person: string, topic: string) {
    if (!characters[person]) {
      throw Error("Cannot initialize unknown person profile");
    }
    this.language = language;
    this.person = person;
    this.topic = topic;

    this.openai = new OpenAI({
      apiKey: "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",
    });

    this.messages = [];

    this.personProfile = characters[person];

    // Sending the initial message to set the context
    this.initMessage = `you are going to help me practice my ${this.language} and I would like you to pretend to be ${this.person} from history; make sure you are historically accurate; please respond in the ${this.language}. I would like to talk about ${this.topic}. what do you think about ${this.topic}? Limt your response to 50 words and ask the user a question!`;
  }

  async setUserMessage(userMessage: string): Promise<void> {
    const message: OpenAI.Chat.ChatCompletionMessageParam = {
      role: "user",
      content: userMessage,
    };
    this.messages.push(message);

    // Get the response from OpenAI
    const completion = await this.openai.chat.completions.create({
      messages: this.messages,
      model: "gpt-3.5-turbo",
    });

    const responseMessage = completion.choices[0].message;
    console.log(responseMessage);
    if (responseMessage) {
      this.lastResponse = responseMessage.content;
      this.messages.push({
        role: responseMessage.role,
        content: responseMessage.content,
      });
    }
  }

  getChatbotResponse(): string | null {
    return this.lastResponse;
  }
}
