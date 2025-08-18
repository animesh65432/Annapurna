import { Request, Response } from "express";
import Cloudinary from "../../services/Cloudinary"
import { groq } from "../../services/Groq"

export const Detectdishes = async (req: Request, res: Response) => {
    try {
        const base64 = req.body.image;
        if (!base64 || !base64.startsWith("data:image")) {
            res.status(400).json({ error: "Invalid or missing base64 image" });
            return
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
                            text: `Identify this Indian dish and return only the dish name in JSON format like:
                                   {"dish_name": "Dish Name"} 
                                   If it's not a dish photo then return {"dish_name": ""}`,
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

        const content = groqResponse.choices[0].message?.content;

        let dishResult;
        try {
            dishResult = JSON.parse(content || "{}");
        } catch (err) {
            throw new Error("Invalid JSON response from model");
        }

        if (!dishResult?.dish_name || dishResult.dish_name.trim().length === 0) {
            res.status(400).json({ success: false, dishName: "", message: "photo is invaild" });
            return
        }

        res.json({
            success: true,
            dishName: dishResult.dish_name.trim(),
            imageUrl: imageurl,
        });

    } catch (error: any) {
        console.error("Error in Detectdishes:", error);
        res.status(500).json({
            error: "Failed to detect dish",
            message: "Something went wrong, please try again later",
        });
    }
};
