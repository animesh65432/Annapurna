import { Request, Response } from "express";
import config from "../../config";
import axios from "axios";

export const Detectingredients = async (req: Request, res: Response) => {
    try {
        const base64 = req.body.image;

        if (!base64 || !base64.startsWith("data:image")) {
            res.status(400).json({ error: "Invalid or missing base64 image" });
            return
        }

        const response = await axios.post(
            "https://api-inference.huggingface.co/models/dandelin/vilt-b32-finetuned-vqa",
            {
                inputs: {
                    image: base64,
                    question: "What food or ingredients do you see?",
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${config.HUGGINGFACEAPI}`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.status(200).json({
            answer: response.data?.[0]?.generated_text || "No answer returned",
        });
        return

    } catch (error: any) {
        console.error("Error in Detectingredients:", error.response?.data || error.message);
        res.status(500).json({
            error: "Failed to detect ingredients",
            details: error.response?.data || error.message,
        });
        return
    }
};
