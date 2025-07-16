import Replicate from "replicate";
import config from "../config";
export const replicate = new Replicate({
    auth: config.REPLIATE_API_TOKEN,
});
