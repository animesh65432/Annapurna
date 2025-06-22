import { Call } from "../service/call"

export const Getsuggestions = (prompt: string) => Call({
    path: "/ai/generate-suggestion",
    request: {
        prompt
    },
    method: "POST"
})