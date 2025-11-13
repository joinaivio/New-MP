
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO } from '../constants';

// Assume process.env.API_KEY is available in the environment
if (!process.env.API_KEY) {
  // This check runs on the server, so console.error is appropriate.
  console.error("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getOpeningStatus = async (userLocation?: { latitude: number; longitude: number }): Promise<string> => {
  try {
    const prompt = `Is the business "${BUSINESS_INFO.name}" located at "${BUSINESS_INFO.address}" currently open? Provide a very short, direct answer. Examples: "Open now", "Closing in 30 minutes", "Closed. Opens at 9 AM".`;

    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }],
        toolConfig: userLocation ? {
          retrievalConfig: {
            latLng: {
              latitude: userLocation.latitude,
              longitude: userLocation.longitude
            }
          }
        } : undefined,
      },
    });

    const text = response.text?.trim();
    if (text) {
      return text;
    } else {
      return "Could not determine status.";
    }
  } catch (error) {
    console.error("Error fetching opening status from Gemini API:", error);
    return "Check current hours on Google.";
  }
};
