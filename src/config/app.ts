import stringToBoolean from "@/utils/stringToBoolean";

export const DEBUG = stringToBoolean(import.meta.env.VITE_DEBUG_MODE)