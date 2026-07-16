import { Raleway, Poppins } from "next/font/google";

export const raleway = Raleway({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});