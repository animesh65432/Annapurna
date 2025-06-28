import { Call } from "../service/call";

export const singinwithgoogle = (credential: string, clientId: string) => Call({
    path: "/auth/googeauth",
    method: "POST",
    request: {
        clientId,
        credential
    }
})