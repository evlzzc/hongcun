
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAboutHongcun(question: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: "你是一位精通徽州文化的资深导游，现在正在宏村为游客提供咨询。请用温文尔雅、富有文化底蕴的语气回答。你的回答应包含历史背景、游览建议或文化常识，且尽可能简洁。",
        },
      });
      return response.text || "抱歉，我现在有点忙，稍后再为您解答。";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "抱歉，由于网络原因，我暂时无法回答。";
    }
  }
}
