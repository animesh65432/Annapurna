import { Request, Response } from "express";
import Cloudinary from "../../services/Cloudinary"
import { groq } from "../../services/Groq"

export const Detectdishes = async (req: Request, res: Response) => {
    try {
        const base64 = req.body.image;
        if (!base64 || !base64.startsWith("data:image")) {
            res.status(400).json({ error: "Invalid or missing base64 image" });
            return;
        }


        const putintocloudinary = await Cloudinary.uploader.upload(base64, {
            resource_type: "image",
            folder: "uploads",
        });

        const imageurl = putintocloudinary.secure_url;

        const groqResponse = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: 'Identify this Indian dish and return only the dish name in JSON format like: {"dish_name": "Dish Name"}',
                        },
                        {
                            type: "image_url",
                            image_url: { url: imageurl },
                        },
                    ],
                },
            ],
            model: "meta-llama/llama-4-scout-17b-16e-instruct",
            response_format: { type: "json_object" },
        });

        const content = groqResponse.choices[0].message.content;
        const dishResult = JSON.parse(content);

        res.json({
            success: true,
            dishName: dishResult.dish_name || null,
        });
    } catch (error: any) {
        console.error("Error in Detectingredients:", error);
        res.status(500).json({
            error: "Failed to detect ingredients",
            message: "something went wrong please try again later"
        });
    }
};
