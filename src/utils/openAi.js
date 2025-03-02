// import OpenAI from "openai";
import { OPENAI_KEY } from "./Constants";
import { GoogleGenerativeAI } from "@google/generative-ai";


// const openai = new OpenAI({
//   apiKey: OPENAI_KEY, 
//   dangerouslyAllowBrowser: true
// });

// async function main() {
//   const chatCompletion = await client.chat.completions.create({
//     messages: [{ role: "user", content: "Say this is a test" }],
//     model: "gpt-4o",
//   });
// }

// main();

// export default openai;
// process.env

const genAI =  new GoogleGenerativeAI(OPENAI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;

