import { name } from "../../package.json";
import stringToBoolean from "@/utils/stringToBoolean";

export const APP_NAME = name;
export const DEBUG = stringToBoolean(import.meta.env.VITE_DEBUG_MODE);
