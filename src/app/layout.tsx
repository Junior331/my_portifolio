import type { Metadata } from "next";
import "./styles/globals.css";
import { poppins, roboto } from "./assets/fonts";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head> */}
      <body className={`${roboto.className} ${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
