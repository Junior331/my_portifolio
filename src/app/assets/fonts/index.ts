import { Roboto, Poppins, Inter } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
