const api ="AIzaSyCZ7UuipGHYguJfGIiM1NNZ8u3FvqtwCaI"
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: api,
});

async function runChat(prompt) {

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
  });

  return response.text;

}

export default runChat;