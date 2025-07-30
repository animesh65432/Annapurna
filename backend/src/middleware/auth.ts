import { Request, Response, NextFunction } from "express"
import db from "../db"
import config from "../config"
import JSONWEBTOEKN from "jsonwebtoken"


export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const token = header && header.startsWith("Bearer ") ? header.split(" ")[1] : null;

    console.log("token", token);

    if (!token) {
        res.status(400).json({ message: "Token is required" });
        return;
    }

    try {
        const { email } = JSONWEBTOEKN.verify(token, config.JWT_SECRET as string) as { email: string };

        if (!email) {
            res.status(400).json({ message: "Token is not valid" });
            return;
        }

        const checkuser = await db.user.findUnique({
            where: { email },
            select: { id: true, email: true }
        });

        if (!checkuser) {
            res.status(400).json({ message: "User not found" });
            return;
        }

        req.user = checkuser;
        next();
    } catch (err) {
        console.error("JWT verification error:", err);
        res.status(401).json({ message: "Invalid or expired token" });
        return
    }
};
