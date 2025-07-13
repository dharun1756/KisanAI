import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const analyzeCropWithAI = async (imageUrl) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
  
  const prompt = `
    Analyze this crop image for diseases. Provide:
    1. Disease name (or "Healthy" if no issue)
    2. Confidence percentage
    3. Organic treatment plan
    4. Prevention tips
  `;

  const result = await model.generateContent([prompt, imageUrl]);
  return result.response.text(); // Process this response as needed
};