import { Poppins } from "next/font/google";

export const poppins = Poppins({
    weight : ["400", "500", "700"],
    preload : true,
    adjustFontFallback : true,
    fallback : ["sans-sarif"],
    variable : "--font-poppins",
    subsets : ["latin"]
})