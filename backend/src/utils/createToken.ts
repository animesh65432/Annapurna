import jwt from "jsonwebtoken";
import config from "../config";

interface TokenPayload {
    email: string;
    iat?: number;
    exp?: number;
}

export const createToken = (email: string): string => {
    const payload: TokenPayload = { email };

    return jwt.sign(payload, config.JWT_SECRET as string, {
        expiresIn: "365d"
    });
};
