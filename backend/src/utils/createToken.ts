import jsonwebtoken from "jsonwebtoken"
import config from "../config"

export const createToken = (email: string): string => {
    return jsonwebtoken.sign({ email }, config.JWT_SECRET as string)
}