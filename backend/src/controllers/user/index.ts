import { asyncerrorhandler } from "../../middleware"
import { Request, Response } from "express"
import db from "../../db";
import { googleclient } from "../../services/googleClient"
import { createToken } from "../../utils/createToken"

export const googleAuth = asyncerrorhandler(async (req: Request, res: Response) => {
    const { credential, clientId } = req.body;

    if (!credential || !clientId) {
        res.status(400).json({ message: "Missing credential or client ID" });
        return
    }

    const ticket = await googleclient.verifyIdToken({
        idToken: credential,
        audience: clientId,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.email) {
        res.status(400).json({ message: "Invalid Google token payload" });
        return
    }

    const { email } = payload

    let user = await db.user.findFirst({
        where: {
            email
        },
    });

    if (!user) {
        user = await db.user.create({
            data: { email },
        });
    }

    const token = createToken(user.email)


    res.cookie("token", token, {
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(user ? 200 : 201).json({
        message: user ? "Successfully logged in" : "Account created and logged in",
    });
    return
});
